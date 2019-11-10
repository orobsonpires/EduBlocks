import * as React from 'preact';
import Config from '../config';
import { UserSession } from '../types';

interface Props {
  visible: boolean;

  onClose(user: UserSession | null): void;
}

export class LoginModal extends React.Component<Props> {
  private listener = (e: MessageEvent) => {
    if (e.data.token) {
      this.props.onClose(e.data);
    }
  }

  public componentDidMount() {
    window.addEventListener('message', this.listener);
  }

  public componentWillUnmount() {
    window.removeEventListener('message', this.listener);
  }

  public render() {
    return (
      <div class='modal'>
        <input id='modal_1' type='checkbox' disabled={true} checked={this.props.visible} />
        <label for='modal_1' class='overlay'></label>
        <article class='AlertModel__container'>
          <header class='SelectModal__header'>
            <h3>Login</h3>
            <a class='SelectModal__close close' onClick={() => this.props.onClose(null)}>&times;</a>
          </header>

          <section class='SelectModel__content'>
            <iframe src={Config.LoginServerUrl}></iframe>
          </section>

          <footer class='alertFooter'>
            <label for='modal_1' class='button dangerous' onClick={() => this.props.onClose(null)}>
              Close
            </label>
          </footer>
        </article>
      </div>
    );
  }
}
