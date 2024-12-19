<template>
  <div class="OrganizationCompetencies">
      <collapse :multiple-active="false">
        <collapse-item
            id="abilities"
            title="Abilities"
            titleElement="h3"
        >
            <template slot="content">
                <InventoryAttributeTable :inventoryData="organization.abilities" elementType="abilities" />
            </template>
        </collapse-item>
        <collapse-item
            id="interests"
            title="Interests"
            titleElement="h3"
        >
            <template slot="content">
                <InventoryAttributeTable :inventoryData="organization.interests" elementType="interests" />
            </template>
        </collapse-item>
        <collapse-item
            id="knowledge"
            title="Knowledge"
            titleElement="h3"
        >
            <template slot="content">
                <InventoryAttributeTable :inventoryData="organization.knowledge" elementType="knowledge" />
            </template>
        </collapse-item>
        <collapse-item
            id="skills"
            title="Skills"
            titleElement="h3"
        >
            <template slot="content">
                <InventoryAttributeTable :inventoryData="organization.skills" elementType="skills" />
            </template>
        </collapse-item>
        <collapse-item
            id="styles"
            title="Styles"
            titleElement="h3"
        >
            <template slot="content">
                <InventoryAttributeTable :inventoryData="organization.styles" elementType="styles" />
            </template>
        </collapse-item>
      </collapse>
  </div>
</template>

<script>
import InventoryAttributeTable from '@/components/Inventory/InventoryAttributeTable';

export default {
    name: 'OrganizationCompetencies',
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
.OrganizationCompetencies {
    display: block;
}
</style>