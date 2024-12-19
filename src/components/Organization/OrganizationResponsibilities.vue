<template>
  <div class="OrganizationResponsibilities">
      <collapse :multiple-active="false">
        <collapse-item
            id="activities"
            title="Activities"
            titleElement="h3"
        >
            <template slot="content">
                <InventoryAttributeTable :inventoryData="organization.activities" elementType="activities" />
            </template>
        </collapse-item>
        <collapse-item
            id="contexts"
            title="Contexts"
            titleElement="h3"
        >
            <template slot="content">
                <InventoryAttributeTable :inventoryData="organization.contexts" elementType="contexts" />
            </template>
        </collapse-item>
        <collapse-item
            id="duties"
            title="Duties"
            titleElement="h3"
        >
            <template slot="content">
                <InventoryAttributeTable :inventoryData="organization.duties" elementType="duties" />
            </template>
        </collapse-item>
        <collapse-item
            id="tech&Tools"
            title="Tech & Tools"
            titleElement="h3"
        >
            <template slot="content">
                <InventoryAttributeTable :inventoryData="organization.toolsAndTech" elementType="tech & tools" />
            </template>
        </collapse-item>
        <collapse-item
            id="values"
            title="Values"
            titleElement="h3"
        >
            <template slot="content">
                <InventoryAttributeTable :inventoryData="organization.values" elementType="values" />
            </template>
        </collapse-item>
      </collapse>
  </div>
</template>

<script>
import InventoryAttributeTable from '@/components/Inventory/InventoryAttributeTable';

export default {
    name: 'OrganizationResponsibilities',
    components: {
        InventoryAttributeTable,
    },
    inject: {
        clickHandler: {
            default: () => {}
        }
    },
    computed: {
        organization() {
            return this.$store.getters.organization;
        }
    }
}
</script>

<style lang="scss" scoped>
.OrganizationResponsibilities {
    display: block;
}
</style>