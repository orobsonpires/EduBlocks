import React = require('preact');
import { Component } from 'preact';

interface VideoTutorialModalProps<T extends VideoTutorialModalOption> {
  title: any;
  visible: boolean;
  videoLink: string;

  onCancel(): void;
  onButtonClick(key: string): void;
  

}

interface VideoTutorialModalState {

}

export interface VideoTutorialModalOption {
  title: string;
  text: string;
}

export default class VideoTutorialModal<T extends VideoTutorialModalOption> extends Component<VideoTutorialModalProps<T>, VideoTutorialModalState> {
  public render() {

    return (
      <div id="VideoTutorialModal" style="display:none">
        <div id="VideoTutorialModalheader">
          <p style="text-align: left; width:49%; display: inline-block; margin: 0px !important;">{this.props.title}</p>
          <p style="text-align: right; width:50%;  display: inline-block; margin: 0px !important;"><i class="fas fa-times-circle"></i></p>
        </div>
        <video width={445} height={245} controls>
          <source src={"https://edublocks.org/videos/" + this.props.title.replace(/\s/g, "") + ".mp4"} type="video/mp4"></source>
        </video>
      </div>
    );
  }
}
