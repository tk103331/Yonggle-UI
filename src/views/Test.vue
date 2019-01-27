<template>
  <yg-container :fluid="true">
    <yg-row>
      <h2>栅格系统</h2>
    </yg-row>
    <yg-row class="show-grid">
      <yg-col :md="1">.col-md-1</yg-col>
      <yg-col :md="1">.col-md-1</yg-col>
      <yg-col :md="1">.col-md-1</yg-col>
      <yg-col :md="1">.col-md-1</yg-col>
      <yg-col :md="1">.col-md-1</yg-col>
      <yg-col :md="1">.col-md-1</yg-col>
      <yg-col :md="1">.col-md-1</yg-col>
      <yg-col :md="1">.col-md-1</yg-col>
      <yg-col :md="1">.col-md-1</yg-col>
      <yg-col :md="1">.col-md-1</yg-col>
      <yg-col :md="1">.col-md-1</yg-col>
      <yg-col :md="1">.col-md-1</yg-col>
    </yg-row>
    <yg-row class="show-grid">
      <yg-col :md="8">.col-md-8</yg-col>
      <yg-col :md="4">.col-md-4</yg-col>
    </yg-row>
    <yg-row class="show-grid">
      <yg-col :md="6">.col-md-6</yg-col>
      <yg-col :md="6">.col-md-6</yg-col>
    </yg-row>
    <yg-row class="show-grid">
      <yg-col :md="3">.col-md-3</yg-col>
      <yg-col :md="3" :offset="3">.col-md-3</yg-col>
    </yg-row>

    <yg-row>
      <h2>表格</h2>
    </yg-row>
    <yg-row>
      <h5>基本实例</h5>
    </yg-row>
    <yg-row>
      <yg-table :data="tableData" class="show-table">
        <yg-table-column prop="no" label="#"></yg-table-column>
        <yg-table-column prop="firstName" label="First Name"></yg-table-column>
        <yg-table-column prop="lastName" label="Last Name"></yg-table-column>
        <yg-table-column prop="username" label="Username">
          <template slot-scope="scope">{{scope.row.userName}}</template>
        </yg-table-column>
      </yg-table>
    </yg-row>
    <yg-row>
      <h5>条纹状表格</h5>
    </yg-row>
    <yg-row>
      <yg-table :data="tableData" striped class="show-table">
        <yg-table-column prop="no" label="#"></yg-table-column>
        <yg-table-column prop="firstName" label="First Name"></yg-table-column>
        <yg-table-column prop="lastName" label="Last Name"></yg-table-column>
        <yg-table-column prop="username" label="Username">
          <template slot-scope="scope">{{scope.row.userName}}</template>
        </yg-table-column>
      </yg-table>
    </yg-row>
    <yg-row>
      <h5>带边框的表格</h5>
    </yg-row>
    <yg-row>
      <yg-table :data="tableData" bordered class="show-table">
        <yg-table-column prop="no" label="#"></yg-table-column>
        <yg-table-column prop="firstName" label="First Name"></yg-table-column>
        <yg-table-column prop="lastName" label="Last Name"></yg-table-column>
        <yg-table-column prop="username" label="Username">
          <template slot-scope="scope">{{scope.row.userName}}</template>
        </yg-table-column>
      </yg-table>
    </yg-row>
    <yg-row>
      <h5>鼠标悬停</h5>
    </yg-row>
    <yg-row>
      <yg-table :data="tableData" hover class="show-table">
        <yg-table-column prop="no" label="#"></yg-table-column>
        <yg-table-column prop="firstName" label="First Name"></yg-table-column>
        <yg-table-column prop="lastName" label="Last Name"></yg-table-column>
        <yg-table-column prop="username" label="Username">
          <template slot-scope="scope">{{scope.row.userName}}</template>
        </yg-table-column>
      </yg-table>
    </yg-row>
    <yg-row>
      <h5>紧缩表格</h5>
    </yg-row>
    <yg-row>
      <yg-table :data="tableData" condensed class="show-table">
        <yg-table-column prop="no" label="#"></yg-table-column>
        <yg-table-column prop="firstName" label="First Name"></yg-table-column>
        <yg-table-column prop="lastName" label="Last Name"></yg-table-column>
        <yg-table-column prop="username" label="Username">
          <template slot-scope="scope">{{scope.row.userName}}</template>
        </yg-table-column>
      </yg-table>
    </yg-row>

    <yg-row>
      <h2>图标</h2>
    </yg-row>
    <yg-row>
      <h5>Font Awesome</h5>
    </yg-row>
    <yg-row>
      <yg-icon type="fa-user" :size="48"></yg-icon>
      <yg-icon type="fa-flash" :size="32"></yg-icon>
      <yg-icon type="fa-flask" :size="24"></yg-icon>
      <yg-icon type="fa-phone" :size="16"></yg-icon>
      <yg-icon type="fa-close" :size="48"></yg-icon>
      <yg-icon type="fa-download" :size="32"></yg-icon>
      <yg-icon type="fa-smile-o" :size="24"></yg-icon>
      <yg-icon type="fa-envelope-o" :size="16"></yg-icon>
      <yg-icon type="fa-flash" :size="32" :rotate="45"></yg-icon>
    </yg-row>
    <yg-row>
      <h5>Glyphicons</h5>
    </yg-row>
    <yg-row>
      <yg-icon type="glyphicon-cog" :size="48"></yg-icon>
      <yg-icon type="glyphicon-user" :size="32"></yg-icon>
      <yg-icon type="glyphicon-envelope" :size="24"></yg-icon>
      <yg-icon type="glyphicon-flag" :size="16"></yg-icon>
      <yg-icon type="glyphicon-film" :size="48"></yg-icon>
      <yg-icon type="glyphicon-map-marker" :size="32"></yg-icon>
      <yg-icon type="glyphicon-tags" :size="24"></yg-icon>
      <yg-icon type="glyphicon-info-sign" :size="16"></yg-icon>
      <yg-icon type="glyphicon-film" :size="32" :rotate="45"></yg-icon>
    </yg-row>
    <yg-row>
      <h5>Icomoon</h5>
    </yg-row>
    <yg-row>
      <yg-icon type="icon-quill4" :size="48"></yg-icon>
      <yg-icon type="icon-magazine" :size="32"></yg-icon>
      <yg-icon type="icon-blog" :size="24"></yg-icon>
      <yg-icon type="icon-shutter" :size="16"></yg-icon>
      <yg-icon type="icon-piano" :size="48"></yg-icon>
      <yg-icon type="icon-music" :size="32"></yg-icon>
      <yg-icon type="icon-camera" :size="24"></yg-icon>
      <yg-icon type="icon-mic2" :size="16"></yg-icon>
      <yg-icon type="icon-quill4" :size="32" :rotate="45"></yg-icon>
    </yg-row>

    <yg-row>
      <h2>按钮</h2>
    </yg-row>
    <yg-row>
      <h5>按钮样式</h5>
    </yg-row>
    <yg-row>
      <yg-button type="default">（默认样式）Default</yg-button>
      <yg-button type="primary">（首选项）Primary</yg-button>
      <yg-button type="success">（成功）Success</yg-button>
      <yg-button type="info">（一般信息）Info</yg-button>
      <yg-button type="warning">（警告）Warning</yg-button>
      <yg-button type="danger">（危险）Danger</yg-button>
      <yg-button type="link">（链接）Link</yg-button>
    </yg-row>
    <yg-row>
      <h5>按钮大小</h5>
    </yg-row>
    <yg-row>
      <yg-button type="primary" size="lg">（大按钮）Large button</yg-button>
      <yg-button type="default" size="lg">（大按钮）Large button</yg-button>
    </yg-row>
    <yg-row>
      <yg-button type="primary">（默认尺寸）Default button</yg-button>
      <yg-button type="default">（默认尺寸）Default button</yg-button>
    </yg-row>
    <yg-row>
      <yg-button type="primary" size="sm">（小按钮）Small button</yg-button>
      <yg-button type="default" size="sm">（小按钮）Small button</yg-button>
    </yg-row>
    <yg-row>
      <yg-button type="primary" size="xs">（超小尺寸）Extra small button</yg-button>
      <yg-button type="default" size="xs">（超小尺寸）Extra small button</yg-button>
    </yg-row>
    <yg-row>
      <yg-button type="primary" size="lg" block>（块级元素）Block level button</yg-button>
      <yg-button type="default" size="lg" block>（块级元素）Block level button</yg-button>
    </yg-row>
    <yg-row>
      <h5>激活状态</h5>
    </yg-row>
    <yg-row>
      <yg-button type="primary" size="lg" active>激活状态</yg-button>
      <yg-button type="default" size="lg" active>激活状态</yg-button>
    </yg-row>
    <yg-row>
      <h5>禁用状态</h5>
    </yg-row>
    <yg-row>
      <yg-button type="primary" size="lg" disabled>禁用状态</yg-button>
      <yg-button type="default" size="lg" disabled>禁用状态</yg-button>
    </yg-row>

    <yg-row>
      <h2>图片</h2>
    </yg-row>
    <yg-row class="show-image">
      <yg-image src="/static/img/img1.svg" title="img-rounded" type="rounded"></yg-image>
      <yg-image src="/static/img/img1.svg" title="img-circle" type="circle"></yg-image>
      <yg-image src="/static/img/img1.svg" title="img-thumbnail" type="thumbnail"></yg-image>
    </yg-row>

    <yg-row>
      <h2>文本</h2>
    </yg-row>
    <yg-row>
      <h5>前景色</h5>
    </yg-row>
    <yg-row>
      <yg-text type="span" color="primary">primary</yg-text>
      <yg-text type="span" color="success">success</yg-text>
      <yg-text type="span" color="info">info</yg-text>
      <yg-text type="span" color="warning">warning</yg-text>
      <yg-text type="span" color="danger">danger</yg-text>

      <yg-text type="span" color="yellow">yellow</yg-text>
      <yg-text type="span" color="blue">blue</yg-text>
      <yg-text type="span" color="#ff00ff">#ff00ff</yg-text>
      <yg-text type="span" color="#c26464">#c26464</yg-text>
    </yg-row>
    <yg-row>
      <h5>背景色</h5>
    </yg-row>
    <yg-row>
      <yg-text type="span" bg-color="primary">primary</yg-text>
      <yg-text type="span" bg-color="success">success</yg-text>
      <yg-text type="span" bg-color="info">info</yg-text>
      <yg-text type="span" bg-color="warning">warning</yg-text>
      <yg-text type="span" bg-color="danger">danger</yg-text>

      <yg-text type="span" bg-color="yellow">yellow</yg-text>
      <yg-text type="span" bg-color="blue">blue</yg-text>
      <yg-text type="span" bg-color="#ff00ff">#ff00ff</yg-text>
      <yg-text type="span" bg-color="#c26464">#c26464</yg-text>
    </yg-row>
  </yg-container>
</template>

<script>
import YgContainer from "@/components/container";
import YgRow from "@/components/row";
import YgCol from "@/components/col";
import YgTable from "@/components/table";
import YgTableColumn from "@/components/table-column";
import YgButton from "@/components/button";
import YgImage from "@/components/image";
import YgIcon from "@/components/icon";
import YgText from "@/components/text";

export default {
  data() {
    return {
      img1:
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzE0MHgxNDAKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNjg2OWY2MGE4NyB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE2ODY5ZjYwYTg3Ij48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjQ0LjA1NDY4NzUiIHk9Ijc0LjUiPjE0MHgxNDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4=",
      tableData: [
        { no: 1, firstName: "Mark", lastName: "Otto", username: "mdo" },
        { no: 1, firstName: "Jacob", lastName: "Thornton", username: "fat" },
        { no: 1, firstName: "Larry", lastName: "the Bird", username: "twitter" }
      ]
    };
  },
  components: {
    YgContainer,
    YgRow,
    YgCol,
    YgTable,
    YgTableColumn,
    YgButton,
    YgImage,
    YgIcon,
    YgText
  }
};
</script>

<style>
.show-grid [class^="col-"] {
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #eee;
  background-color: rgba(86, 61, 124, 0.15);
  border: 1px solid #ddd;
  border: 1px solid rgba(86, 61, 124, 0.2);
}
.row {
  margin: 5px;
}
.row.show-image > img {
  width: 140px;
  height: 140px;
}
.show-table {
  width: 500px;
}
</style>

