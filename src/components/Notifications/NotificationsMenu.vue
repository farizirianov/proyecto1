<template>
<NotificationItem></NotificationItem>
</template>

<script>
// COMPONENTS
import NotificationItem from '@/components/Notifications/NotificationItem.vue';
export default {
  components:{
    NotificationItem
  }
}
</script>

<style>
.badge-notification {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: red;
  position: absolute;
  top: 1px;
  right: 5px;
}
</style>
