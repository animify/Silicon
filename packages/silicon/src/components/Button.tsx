import React from 'react';
import { useFela, CssFelaStyle } from 'react-fela';
import { LightTheme } from '../Themes/light';

interface Props {
    children: React.ReactNode;
}

const rule: CssFelaStyle<LightTheme, Props> = ({theme}) => ({
        backgroundColor: theme.color.primary,
    borderRadius: 4,
    padding: 20,
    nested: {
        ':hover': {
            borderRadius: 8,
        },

    }
});

export default function Button(props: Props) {
    const { css } = useFela<LightTheme, Props>(props);

    return <button className={css(rule)}>{props.children}</button>;
}

