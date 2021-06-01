import { PROPS_TYPES } from '@/types/ConfigTypes';
import { ComponentConfigType } from '@/types/ComponentConfigType';

const Breadcrumb: ComponentConfigType = {
  nodePropsConfig: {
    separator: {
      type: PROPS_TYPES.reactNode,
    },
    itemRender: {
      type: PROPS_TYPES.functionReactNode,
      params: ['route', 'params', 'routes', 'paths'],
    },
    children: {
      type: PROPS_TYPES.reactNode,
    },
  },
  propsConfig: {
    params: {
      label: '路由的参数',
      type: PROPS_TYPES.object,
      childPropsConfig: {},
    },
    routes: {
      label: 'router 的路由栈信息',
      type: PROPS_TYPES.objectArray,
      childPropsConfig: [{
        path: {
          label: 'path',
          type: PROPS_TYPES.string,
        },
        breadcrumbName: {
          label: 'breadcrumbName',
          type: PROPS_TYPES.string,
        },
        children: {
          label: 'children',
          type: PROPS_TYPES.objectArray,
          childPropsConfig: [{
            path: {
              label: 'path',
              type: PROPS_TYPES.string,
            },
            breadcrumbName: {
              label: 'breadcrumbName',
              type: PROPS_TYPES.string,
            },
          }],
        },
      }],
    },
  },
};
const Item: ComponentConfigType = {
  nodePropsConfig: {
    overlay: {
      label: '菜单',
      tip: '哈哈哈',
      type: PROPS_TYPES.functionReactNode,
      params: [],
      childNodesRule: ['Menu'],
    },
    children: {
      type: PROPS_TYPES.reactNode,
    },
  },
  propsConfig: {
    children: {
      label: '内容',
      type: PROPS_TYPES.string,
    },
    href: {
      label: '链接的目的地',
      type: PROPS_TYPES.string,
    },
    onClick: {
      label: '单击事件',
      type: PROPS_TYPES.function,
      placeholder: '(e)=>{}',
    },
  },
};
const Separator: ComponentConfigType = {
  propsConfig: {
    children: {
      label: '要显示的分隔符',
      type: PROPS_TYPES.string,
    },
  },
};

export default {
  Breadcrumb,
  'Breadcrumb.Item': Item,
  'Breadcrumb.Separator': Separator,
};
