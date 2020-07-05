import React from 'react';
import { useFela, CssFelaStyle } from 'react-fela';
import { LightTheme } from '../Themes/light';

interface Props {
    kind: 'primary' | 'secondary';
    children: React.ReactNode;
}

const rule: CssFelaStyle<LightTheme, Props> = (state) => ({
    backgroundColor: state.theme.color.primary,
    borderRadius: '4px',
    padding: '20px',
    appearance: 'none',
    outline: 0,
    border: '0px',
    nested: {
        ':hover': {
            borderRadius: '8px',
        },
        ':active': {
            backgroundColor: state.theme.color.secondary,
        },
    },
});

export default function Button(props: Props) {
    const { css } = useFela<LightTheme, Props>(props);

    return <button className={css(rule)}>{props.children}</button>;
}
