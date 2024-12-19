<template>
  <div class="Goals">
      <collapse :multiple-active="false">
        <collapse-item
            id="events"
            title="Events"
            titleElement="h3"
        >
            <template slot="content">
                <InventoryAttributeTable :inventoryData="[{ id: '12345', name: 'eventItem1' }]" elementType="events" />
            </template>
        </collapse-item>
        <collapse-item
            id="results"
            title="Results"
            titleElement="h3"
        >
            <template slot="content">
                <InventoryAttributeTable :inventoryData="[{ id: '12345', name: 'resultsItem1' }]" elementType="results" />
            </template>
        </collapse-item>
        <collapse-item
            id="tasks"
            title="Tasks"
            titleElement="h3"
        >
            <template slot="content">
                <InventoryAttributeTable :inventoryData="[{ id: '12345', name: 'taskItem1' }]" elementType="tasks" />
            </template>
        </collapse-item>
      </collapse>
  </div>
</template>

<script>
import InventoryAttributeTable from '@/components/Inventory/InventoryAttributeTable';

export default {
    name: 'Goals',
    components: {
        InventoryAttributeTable,
    },
    inject: {
        clickHandler: {
            default: () => {}
        }
    },
}
</script>

<style lang="scss" scoped>
.Goals {
    display: block;
}
</style>