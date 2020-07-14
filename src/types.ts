import { AsProp } from './utils/getElement';
import { BoxProps } from './utils/boxRule';
import { CSSProps } from './utils/styleRule';
import { Props } from 'react';
import { VariantProp } from './utils/variantRule';

export type TLength = string | 0 | number;

export type Prefer<P, T> = P & Omit<T, keyof P>;
export type ReactPropsWithRef<T extends React.ReactType> = Pick<
    React.ComponentPropsWithRef<T>,
    keyof React.ComponentPropsWithRef<T>
>;
export type ExtendProps<OwnProps, Type extends React.ReactType> = Prefer<OwnProps, ReactPropsWithRef<Type>>;

export type HTMLAnchorProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
export type HTMLButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export type HTMLDivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type HTMLInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export type HTMLImgProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
export type HTMLTextareaProps = React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
>;

export type ComponentTypes<T> = AsProp<T> & VariantProp & BoxProps & CSSProps<Props<T>>;
