import {
    PageButton,
    PageContainer,
    PageFlex,
    PageGrid,
    PageImage,
    PageInput,
    PageLink,
    PageText,
    PageVariant,
    PageBoxProps,
    PageCSS,
} from '../pages';

const enum RouteType {
    Button = 'Button',
    Container = 'Container',
    Flex = 'Flex',
    Grid = 'Grid',
    Image = 'Image',
    Input = 'Input',
    Link = 'Link',
    Text = 'Text',
    Variant = 'Variant',
    BoxProps = 'BoxProps',
    CSS = 'CSS',
}

type Routes = Record<
    RouteType,
    {
        title: RouteType;
        path: string;
        component: () => JSX.Element;
    }
>;

const routes: Routes = {
    [RouteType.Button]: {
        title: RouteType.Button,
        path: '/button',
        component: PageButton,
    },
    [RouteType.Container]: {
        title: RouteType.Container,
        path: '/container',
        component: PageContainer,
    },
    [RouteType.Flex]: {
        title: RouteType.Flex,
        path: '/flex',
        component: PageFlex,
    },
    [RouteType.Grid]: {
        title: RouteType.Grid,
        path: '/grid',
        component: PageGrid,
    },
    [RouteType.Image]: {
        title: RouteType.Image,
        path: '/image',
        component: PageImage,
    },
    [RouteType.Input]: {
        title: RouteType.Input,
        path: '/input',
        component: PageInput,
    },
    [RouteType.Link]: {
        title: RouteType.Link,
        path: '/link',
        component: PageLink,
    },
    [RouteType.Text]: {
        title: RouteType.Text,
        path: '/text',
        component: PageText,
    },
    [RouteType.Variant]: {
        title: RouteType.Variant,
        path: '/variant',
        component: PageVariant,
    },
    [RouteType.BoxProps]: {
        title: RouteType.BoxProps,
        path: '/props',
        component: PageBoxProps,
    },
    [RouteType.CSS]: {
        title: RouteType.CSS,
        path: '/css',
        component: PageCSS,
    },
};

export default routes;
