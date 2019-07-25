<template>
  <div>
    <h3>菜鸟驿站</h3>
    <a-button>All</a-button>
    <a-button>已预约</a-button>
    <a-button>已取件</a-button>
    <a-button>未取件</a-button>

    <a-button type="primary" shape="circle" size="large" @click="showModal">添加</a-button>

    <a-modal v-model="visible" title="Title" onOk="handleOk">
      <template slot="footer">
        <a-button key="back" @click="handleCancel">Return</a-button>
        <a-button key="submit" type="primary" :loading="loading" @click="add">Submit</a-button>
      </template>
      <p>
        运单号：
        <a-input v-model="id"></a-input>
      </p>
      <p>
        收件人：
        <a-input v-model="name"></a-input>
      </p>
      <p>
        电话：
        <a-input v-model="phone"></a-input>
      </p>
      <p>
        重量：
        <a-input v-model="weight"></a-input>
      </p>
    </a-modal>

    <a-table :columns="columns" :dataSource="items" size="small">
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
import { type } from 'os';
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
];



export default {
  data() {
    return {
      data,
      columns,
      loading: false,
      visible: false,
      id: "",
      name: "",
      phone: "",
      weight: "",
    };
  },
  computed: {
    items() {
      return this.$store.getters.getItems;
    }
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.loading = true;
      setTimeout(() => {
        this.visible = false;
        this.loading = false;
      }, 3000);
    },
    handleCancel(e) {
      this.visible = false;
    },
    add() {
      this.$store.commit("addItems",{id:this.id,name:this.name,phone:this.phone,weight:this.weight});
    }
  }
};
</script>
