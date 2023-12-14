<template>
  <div class="bg-white">
    <div class="">
      <p class="text-gray-500 text-xs font-medium font-['Inter'] leading-none">Название</p>
    </div>
    <div class="">
      <Search @onChange="onSearch" searchPlaceholder="Найти ..." />
    </div>
  </div>
</template>