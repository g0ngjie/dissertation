<template>
  <div>
    <el-upload
      action="https://classbro-oss.oss-accelerate.aliyuncs.com/"
      :on-remove="handleRemove"
      :multiple="false"
      :data="ossData"
      :limit="1"
      :on-success="handleSuccess"
      :before-upload="beforeUpload"
    >
      <div :id="'target' + index"></div>
    </el-upload>
    <el-input
      v-show="textShow"
      size="mini"
      v-model="form.remark"
      type="textarea"
      placeholder="请输入文件描述"
    ></el-input>
  </div>
</template>

<script>
import { getAliOSSUploadSign } from "@/views/dissertation/api";

export default {
  data() {
    return {
      fileList: [],
      ossData: {},
      textShow: false,
    };
  },
  props: {
    form: {
      type: Object,
      default() {},
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    checkFile() {
      document.getElementById(`target${this.index}`).click();
    },
    handleRemove() {
      this.form.enable = false;
      this.textShow = false;
    },
    handleSuccess() {
      const { host, name, dir } = this.ossData;
      this.form.url = host + "/" + dir + encodeURIComponent(name); //添加文案标识记录
      this.form.name = name;
      this.form.enable = true;
      this.textShow = true;
    },
    async beforeUpload({ name, size }) {
      if (!size) {
        this.$message.warning("不能上传0kb的文件");
        return;
      }
      await this.initOssSign(name);
    },
    async initOssSign(name) {
      const { body } = await getAliOSSUploadSign();
      const { accessid, signature, dir, policy, host } = body;
      this.ossData = {
        name,
        key: dir + name,
        dir,
        signature,
        success_action_status: 200,
        OSSAccessKeyId: accessid,
        policy,
        host,
      };
    },
  },
};
</script>
