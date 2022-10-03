<script>
import { getTest } from "./config/api";
export default {
  onLaunch: function () {
    console.log("App Launch");
    // this.testRequst();
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
  methods: {
    async testRequst() {
      const res = await getTest();
      console.log(res);
    },
  },
};
</script>

<style>
/*每个页面公共css */
</style>
