import Block from "../../../framework/Block";
import { Avatar } from "../../avatar/avatar";

export class HeaderChat extends Block {
    constructor(){
        super({
            Avatar: new Avatar({})
        })
    }

    override render(): string {
        //{{{ Avatar src="../../../public/images/avatar-example.png" class="avatar_small"  }}}
        return `<header class="header-chat">
                <div class="header-chat__name-block">
                    <p class="header-chat__name">Вадим</p>
                </div>
                {{{ SvgIcon path="../../../public/svg/more-svg.svg" height="15px" name="скребка" }}}
                </header>`    
    }
}
