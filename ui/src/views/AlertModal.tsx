import * as React from 'preact';

interface Props {
  title: string;
  visible: boolean;
  text: string;

  onClose(key: 'close'): void;
}

export default class AlertModal extends React.Component<Props, {}> {
  public render() {
    return (
      <div class='modal'>
        <input id='modal_1' type='checkbox' disabled={true} checked={this.props.visible} />
        <label for='modal_1' class='overlay'></label>
        <article class='AlertModel__container'>
          <header class='SelectModal__header'>
            <h3>{this.props.title}</h3>
            <a class='SelectModal__close close' onClick={() => this.props.onClose('close')}>&times;</a>
          </header>

          <section class='SelectModel__content'>
            {this.props.text}
          </section>

          <footer class='alertFooter'>
            <label for='modal_1' class='button dangerous' onClick={() => this.props.onClose('close')}>
              Close
            </label>
          </footer>
        </article>
      </div>
    );
  }
}
