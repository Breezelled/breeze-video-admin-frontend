import { Settings as LayoutSettings } from '@ant-design/pro-layout';
// import logo from "../public/long_logo.svg";

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  primaryColor: '#eb6d38',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: false,
  pwa: false,
  logo: '/long_logo.svg',
  iconfontUrl: '',
};

export default Settings;
