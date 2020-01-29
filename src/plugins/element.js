import Vue from 'vue'
// eslint-disable-next-line no-unused-vars,import/no-duplicates
import {
  Button, Form, FormItem, Input, Message, Container,
  Header, Aside, Main, Menu, Submenu, MenuItem,
  Breadcrumb, BreadcrumbItem, Card, Row, Col, Table,
  TableColumn, Switch, Tooltip, Pagination, Dialog, MessageBox,
  Tag, Tree, Select, Option, Cascader, Alert,
  Tabs, TabPane, Steps, Step, CheckboxGroup, Checkbox,
  Upload
} from 'element-ui' // 按需导入

import Timeline from '../plugins/timeline/index.js'
import TimelineItem from '../plugins/timelineitem/index.js'
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Option)
Vue.use(Cascader)
Vue.use(Alert)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Steps)
Vue.use(Step)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(Upload)
Vue.use(Timeline)
Vue.use(TimelineItem)
// 全局挂载
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
