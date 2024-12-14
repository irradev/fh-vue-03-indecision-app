<template>
  <div :class="`position-${type}`">
    <div :class="`message ${type}`">
      <span>{{ message }}</span>
      <img v-if="image" :src="image" alt="YesNoImage" class="w-52 h-52 object-cover rounded-md" />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  type: 'sent' | 'received';
  message: string;
  image?: string;
}

defineProps<Props>();
</script>

<style scoped>
.position-sent {
  @apply flex justify-end;
}

.position-received {
  @apply flex justify-start;
}

.message {
  @apply text-black p-2 rounded-lg max-w-xs;

  &.sent {
    @apply bg-blue-200;
  }

  &.received {
    @apply bg-gray-300;
  }
}
</style>
