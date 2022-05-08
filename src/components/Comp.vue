<script lang="jsx">
  import { ref } from 'vue';

  export default {
    setup() {
      const counter = ref(0);
      return () => <div>counter.value</div>;
    },
  };
</script>
