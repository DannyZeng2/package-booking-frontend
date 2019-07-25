<template>
  <div>
    <h3>菜鸟驿站</h3>
    <a-button>All</a-button>
    <a-button>已预约</a-button>
    <a-button>已取件</a-button>
    <a-button>未取件</a-button>
    <a-table :columns="columns" :dataSource="data">
      <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
      <span slot="customTitle">
        <a-icon type="smile-o" />Name
      </span>
      <span slot="tags" slot-scope="tags">
        <a-tag v-for="tag in tags" color="blue" :key="tag">{{tag}}</a-tag>
      </span>

      <span slot="action">
        <a href="javascript:;">确认收货</a>
      </span>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: "订单号",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "收件人",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "电话",
    dataIndex: "phone",
    key: "phone"
  },
  {
    title: "状态",
    key: "status",
    dataIndex: "status"
  },
  {
    title: "预约时间",
    key: "bookinkTime",
    dataIndex: "bookinkTime"
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];

const data = [
  {
    id: "1",
    name: "John Brown",
    phone: "12223445544",
    status: "已预约",
    bookinkTime: ""
  },
  {
    id: "2",
    name: "Jim Green",
    phone: "14255667654",
    status: "未取件",
    bookinkTime: ""
  },
  {
    id: "3",
    name: "Joe Black",
    phone: "12466888899",
    status: "未取件",
    bookinkTime: ""
  }
];

export default {
  data() {
    return {
      data,
      columns
    };
  }
};
</script>
