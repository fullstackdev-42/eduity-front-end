<template>
  <div class="OrganizationQualifications">
      <collapse :multiple-active="false">
        <collapse-item
            id="certifications"
            title="Certifications"
            titleElement="h3"
        >
            <template slot="content">
                <InventoryAttributeTable :inventoryData="organization.certifications" elementType="certifications" />
            </template>
        </collapse-item>
        <collapse-item
            id="education"
            title="Education"
            titleElement="h3"
        >
            <template slot="content">
                <InventoryAttributeTable :inventoryData="organization.education" elementType="education" />
            </template>
        </collapse-item>
        <collapse-item
            id="training"
            title="Training"
            titleElement="h3"
        >
            <template slot="content">
                <InventoryAttributeTable :inventoryData="organization.training" elementType="training" />
            </template>
        </collapse-item>
        <collapse-item
            id="workExperience"
            title="Work Experience"
            titleElement="h3"
        >
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
    name: 'OrganizationQualifications',
    components: {
        InventoryAttributeTable
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
.OrganizationQualifications {
    display: block;
}
</style>