import { Level } from 'theme';
declare type BadgeProps = {
    /**
     * Level of the Badge defining it's color and outline.
     */
    level?: Level;
    /**
     * Children of the Badge, can only be string for a Badge.
     */
    children?: string;
};
declare const Badge: ({ level, children }: BadgeProps) => JSX.Element;
export { Badge };
