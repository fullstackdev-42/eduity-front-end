<template>
  <div class="UnitQualifications">
      <collapse :multiple-active="false">
        <collapse-item
            id="certifications"
            title="Certifications"
            titleElement="h3"
        >
            <template slot="button">
                <p-button size="sm" type="primary" @click="clickHandler">
                    <i class="nc-icon lindua-plus mx-1"></i>
                    Add
                </p-button>
            </template>
            <template slot="content">
                <InventoryAttributeTable :inventoryData="[{ id: '12345', name: 'certificationsItem1' }]" elementType="certifications" />
            </template>
        </collapse-item>
        <collapse-item
            id="education"
            title="Education"
            titleElement="h3"
        >
            <template slot="button">
                <p-button size="sm" type="primary" @click="clickHandler">
                    <i class="nc-icon lindua-plus mx-1"></i>
                    Add
                </p-button>
            </template>
            <template slot="content">
                <InventoryAttributeTable :inventoryData="[{ id: '12345', name: 'educationItem1' }]" elementType="education" />
            </template>
        </collapse-item>
        <collapse-item
            id="training"
            title="Training"
            titleElement="h3"
        >
            <template slot="button">
                <p-button size="sm" type="primary" @click="clickHandler">
                    <i class="nc-icon lindua-plus mx-1"></i>
                    Add
                </p-button>
            </template>
            <template slot="content">
                <InventoryAttributeTable :inventoryData="[{ id: '12345', name: 'trainingItem1' }]" elementType="training" />
            </template>
        </collapse-item>
        <collapse-item
            id="workExperience"
            title="Work Experience"
            titleElement="h3"
        >
            <template slot="button">
                <p-button size="sm" type="primary" @click="clickHandler">
                    <i class="nc-icon lindua-plus mx-1"></i>
                    Add
                </p-button>
            </template>
            <template slot="content">
                <InventoryAttributeTable :inventoryData="[{ id: '12345', name: 'workExperienceItem1' }]" elementType="work experience" />
            </template>
        </collapse-item>
      </collapse>
  </div>
</template>

<script>
import InventoryAttributeTable from '@/components/Inventory/InventoryAttributeTable';

export default {
    name: 'UnitQualifications',
    components: {
        InventoryAttributeTable
    },
    inject: {
        clickHandler: {
            default: () => {}
        }
    },
}
</script>

<style lang="scss" scoped>
.UnitQualifications {
    display: block;
}
</style>