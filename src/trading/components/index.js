import React, {Component} from 'react'
import { Tabs } from 'antd';


const { TabPane } = Tabs;

class Demo extends Component {

  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" size={'large'}>
          <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
          <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Demo;

/*<header id="header" class="clearfix">
<div class="ant-row">

<div class="ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-5 ant-col-xl-5 ant-col-xxl-4">
<a id="logo" href="/">
<img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg">
<img alt="Ant Design" src="https://gw.alipayobjects.com/zos/rmsportal/DkKNubTaaVsKURhcVGkh.svg">
</a>
</div>

<div class="ant-col-xs-0 ant-col-sm-0 ant-col-md-18 ant-col-lg-19 ant-col-xl-19 ant-col-xxl-20">
<div id="search-box">
<i class="anticon anticon-search"></i>
<span class="algolia-autocomplete" style="position: relative; display: inline-block; direction: ltr;">
<input placeholder="Search in ant.design" type="text" class="ant-input ds-input" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="algolia-autocomplete-listbox-0" dir="auto" style="position: relative; vertical-align: top;"><pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: &quot;Chinese Quote&quot;, -apple-system, system-ui, &quot;Segoe UI&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; font-size: 14px; font-style: normal; font-variant: tabular-nums; font-weight: 400; word-spacing: 0px; letter-spacing: normal; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre><span class="ds-dropdown-menu" role="listbox" id="algolia-autocomplete-listbox-0" style="position: absolute; top: 100%; z-index: 100; display: none; left: 0px; right: auto;">

<div class="ds-dataset-1"></div>
</span></span>
</div>
<button type="button" class="ant-btn header-lang-button ant-btn-sm ant-btn-background-ghost ant-btn-two-chinese-chars">
<span>中文</span>
</button>
<div class="ant-select-sm version ant-select ant-select-enabled">
<div class="ant-select-selection ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false" tabindex="0"><div class="ant-select-selection__rendered">
<div class="ant-select-selection-selected-value" title="3.8.4" style="display: block; opacity: 1;">3.8.4</div>
</div>
<span class="ant-select-arrow" unselectable="on" style="user-select: none;"><b></b></span>
</div>
</div>
<ul class="ant-menu menu-site ant-menu-light ant-menu-root ant-menu-horizontal" id="nav" role="menu"><li class="ant-menu-item" role="menuitem"><a href="/">
<span>Home</span>
</a>
</li>
<li class="ant-menu-item" role="menuitem"><a href="/docs/spec/introduce"><span>Guidelines</span></a></li><li class="ant-menu-item ant-menu-item-selected" role="menuitem"><a href="/docs/react/introduce"><span>Components</span></a></li><li class="ant-menu-item" role="menuitem">
<a href="http://pro.ant.design" class="header-link" target="_blank" rel="noopener noreferrer"><span>PRO</span><span style="display: inline-block; position: relative; top: -2px; width: 6px; margin-left: 8px;"><span class="ant-badge ant-badge-not-a-wrapper"><sup data-show="true" class="ant-scroll-number ant-badge-dot"></sup></span></span></a></li></ul></div></div>

</header>*/
