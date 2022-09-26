import { MouseEventHandler } from 'react';

export type MenuProps = {
    /** Shareable link to the current photo */
    link: string;
    /** Function that sets the new photo when the Change photo button is clicked */
    handleChangePic: MouseEventHandler;
}

export type Button = {
    /** Text that the button displays */
    label: string;
    /** Icon that will be displayed - not yet implemented */
    icon: string;
    /** Action that the button click triggers */
    action: (() => Promise<void>) | MouseEventHandler<Element>;
}
