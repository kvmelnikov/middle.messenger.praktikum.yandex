import Block from '../../framework/Block';
import { TooltipAttachElement } from '../tooltip-atach-element/tooltip-attach-element';

export class ToolTipAttach extends Block {
  constructor() {
    super({
      TooltipAttachElementPhoto: new TooltipAttachElement({
        src: '../../../public/images/photoOrVideo.png',
        alt: 'фото и видео',
        text: 'Фото или Видео',
      }),
      TooltipAttachElementFile: new TooltipAttachElement({
        src: '../../../public/images/file.png',
        alt: 'файл',
        text: 'Файл',
      }),
      TooltipAttachElementLocation: new TooltipAttachElement({
        src: '../../../public/images/file.png',
        alt: 'Локация',
        text: 'Локация',
      }),
    });
  }

  protected render(): string {
    return `<div class="tooltip-attach">
                    {{{ TooltipAttachElementPhoto }}}
                    {{{ TooltipAttachElementFile }}}
                    {{{ TooltipAttachElementLocation }}}
            </div>`;
  }
}
