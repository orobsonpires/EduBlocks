import * as React from 'preact';
import { sleep } from '../lib/util';

interface Closable<TRet> {
  onClose: (result: TRet) => void;
}

export function openModal<TProps extends Closable<any>, TReturn extends TProps extends Closable<infer TRet> ? TRet : void>(component: React.ComponentType<TProps>, props: Omit<TProps, 'onClose' | 'visible'>) {
  const region = document.getElementById('modals')!;
  const holder = document.createElement('div');
  region.appendChild(holder);

  return new Promise<TReturn>(async (resolve, reject) => {
    const closable = {
      onClose: (result: TReturn) => {
        holder.remove();

        resolve(result);
      },
    };

    const orgProps: any = {
      ...props,
      ...closable,
      visible: false,
    };

    let node = React.createElement(component, orgProps);
    React.render(node, holder);

    await sleep(250);

    orgProps.visible = true;

    node = React.createElement(component, orgProps);
    React.render(node, holder);
  });
}

export function popupWindow(url: string, title: string, width: number, height: number) {
  const left = (screen.width / 2) - (width / 2);
  const top = (screen.height / 2) - (height / 2);

  let options = '';
  options += ',width=' + width;
  options += ',height=' + height;
  options += ',top=' + top;
  options += ',left=' + left;
  return window.open(url, title, options);
}
