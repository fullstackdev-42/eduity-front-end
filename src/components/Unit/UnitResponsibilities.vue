<template>
  <div class="UnitResponsibilities">
      <collapse :multiple-active="false">
        <collapse-item
            id="activities"
            title="Activities"
            titleElement="h3"
        >
            <template slot="button">
                <p-button size="sm" type="primary" @click="clickHandler">
                    <i class="nc-icon lindua-plus mx-1"></i>
                    Add
                </p-button>
            </template>
            <template slot="content">
                <InventoryAttributeTable :inventoryData="[{ id: '12345', name: 'activitiesItem1' }]" elementType="activities" />
            </template>
        </collapse-item>
        <collapse-item
            id="contexts"
            title="Contexts"
            titleElement="h3"
        >
            <template slot="button">
                <p-button size="sm" type="primary" @click="clickHandler">
                    <i class="nc-icon lindua-plus mx-1"></i>
                    Add
                </p-button>
            </template>
            <template slot="content">
                <InventoryAttributeTable :inventoryData="[{ id: '12345', name: 'contextsItem1' }]" elementType="contexts" />
            </template>
        </collapse-item>
        <collapse-item
            id="duties"
            title="Duties"
            titleElement="h3"
        >
            <template slot="button">
                <p-button size="sm" type="primary" @click="clickHandler">
                    <i class="nc-icon lindua-plus mx-1"></i>
                    Add
                </p-button>
            </template>
            <template slot="content">
                <InventoryAttributeTable :inventoryData="[{ id: '12345', name: 'dutiesItem1' }]" elementType="duties" />
            </template>
        </collapse-item>
        <collapse-item
            id="tech&Tools"
            title="Tech & Tools"
            titleElement="h3"
        >
            <template slot="button">
                <p-button size="sm" type="primary" @click="clickHandler">
                    <i class="nc-icon lindua-plus mx-1"></i>
                    Add
                </p-button>
            </template>
            <template slot="content">
                <InventoryAttributeTable :inventoryData="[{ id: '12345', name: 'techAndToolsItem1' }]" elementType="tech & tools" />
            </template>
        </collapse-item>
        <collapse-item
            id="values"
            title="Values"
            titleElement="h3"
        >
            <template slot="button">
                <p-button size="sm" type="primary" @click="clickHandler">
                    <i class="nc-icon lindua-plus mx-1"></i>
                    Add
                </p-button>
            </template>
            <template slot="content">
                <InventoryAttributeTable :inventoryData="[{ id: '12345', name: 'valuesItem1' }]" elementType="values" />
            </template>
        </collapse-item>
      </collapse>
  </div>
</template>

<script>
import InventoryAttributeTable from '@/components/Inventory/InventoryAttributeTable';

export default {
    name: 'UnitResponsibilities',
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
.UnitResponsibilities {
    display: block;
}
</style>