import React from 'react';
import { useFela, CssFelaStyle } from 'react-fela';
import { Theme } from '../Themes/types';

interface Props {
    kind: 'primary' | 'secondary';
    children: React.ReactNode;
}

const rule: CssFelaStyle<Theme, Props> = (state) => ({
    backgroundColor: state.theme.color.primary,
    color: state.theme.color.white,
    fontWeight: state.theme.font.weight.medium,
    padding: '12px 20px',
    appearance: 'none',
    outline: 0,
    border: '0px',
    borderRadius: '4px',
    nested: {
        ':hover': {},
        ':active': {
            backgroundColor: state.theme.color.secondary,
        },
    },
});

export default function Button(props: Props) {
    const { css } = useFela<Theme, Props>(props);

    return <button className={css(rule)}>{props.children}</button>;
}
