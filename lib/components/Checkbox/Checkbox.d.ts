declare type CheckboxProps = {
    /**
     * State of the Checkbox
     */
    checked: boolean;
    /**
     * Displays the value of the input, but does not allow changes.s
     */
    readOnly?: boolean;
    /**
     * The undetermined state comes into play when the checkbox contains a sublist of selections,
     * some of which are selected, and others aren't.
     */
    undetermined?: boolean;
    /**
     * Provide a description of the Checkbox, the label appears on the right of the checkboxes.
     */
    label?: string;
    /**
     * The handler called when clicking on Checkbox
     */
    onChange?: (value: boolean) => void;
};
/**
 * The checkboxes are applied when users can select all, several, or none of the options from a given list.
 */
declare const Checkbox: ({ label, checked, onChange, undetermined, readOnly }: CheckboxProps) => JSX.Element;
export { Checkbox };
