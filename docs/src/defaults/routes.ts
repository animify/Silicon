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
    PageColors,
} from '../pages';
import PageSlider from '../pages/PageSlider';

const enum RouteType {
    Button = 'Button',
    Container = 'Container',
    Flex = 'Flex',
    Grid = 'Grid',
    Image = 'Image',
    Input = 'Input',
    Slider = 'Slider',
    Link = 'Link',
    Text = 'Text',
    Variant = 'Variant',
    BoxProps = 'BoxProps',
    CSS = 'CSS',
    Colors = 'Colors',
}

interface Route {
    title: RouteType;
    path: string;
    component: () => JSX.Element;
}

const componentRoutes: Record<string, Route> = {
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
    [RouteType.Slider]: {
        title: RouteType.Slider,
        path: '/slider',
        component: PageSlider,
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
};

const themeRoutes: Record<string, Route> = {
    [RouteType.Colors]: {
        title: RouteType.Colors,
        path: '/colors',
        component: PageColors,
    },
};

const styleRoutes: Record<string, Route> = {
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

export { themeRoutes, styleRoutes, componentRoutes };
