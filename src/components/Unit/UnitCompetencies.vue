<template>
  <div class="UnitCompetencies">
      <collapse :multiple-active="false">
        <collapse-item
            id="abilities"
            title="Abilities"
            titleElement="h3"
        >
            <template slot="button">
                <p-button size="sm" type="primary" @click="clickHandler">
                    <i class="nc-icon lindua-plus mx-1"></i>
                    Add
                </p-button>
            </template>
            <template slot="content">
                <InventoryAttributeTable :inventoryData="abilities" elementType="abilities" />
            </template>
        </collapse-item>
        <collapse-item
            id="interests"
            title="Interests"
            titleElement="h3"
        >
            <template slot="button">
                <p-button size="sm" type="primary" @click="clickHandler">
                    <i class="nc-icon lindua-plus mx-1"></i>
                    Add
                </p-button>
            </template>
            <template slot="content">
            <card class="card-nav-tabs" centered header-classes="card-header-primary">
                <h4 class="card-title">{{ interests.title }}</h4>
                <p class="card-text">{{ interests.description }}</p>
            </card>
            </template>
        </collapse-item>
        <collapse-item
            id="knowledge"
            title="Knowledge"
            titleElement="h3"
        >
            <template slot="button">
                <p-button size="sm" type="primary" @click="clickHandler">
                    <i class="nc-icon lindua-plus mx-1"></i>
                    Add
                </p-button>
            </template>
            <template slot="content">
                <InventoryAttributeTable :inventoryData="knowledge" elementType="knowledge" />
            </template>
        </collapse-item>
        <collapse-item
            id="skills"
            title="Skills"
            titleElement="h3"
        >
            <template slot="button">
                <p-button size="sm" type="primary" @click="clickHandler">
                    <i class="nc-icon lindua-plus mx-1"></i>
                    Add
                </p-button>
            </template>
            <template slot="content">
                <InventoryAttributeTable :inventoryData="skills" elementType="skills" />
            </template>
        </collapse-item>
        <collapse-item
            id="styles"
            title="Styles"
            titleElement="h3"
        >
            <template slot="button">
                <p-button size="sm" type="primary" @click="clickHandler">
                    <i class="nc-icon lindua-plus mx-1"></i>
                    Add
                </p-button>
            </template>
            <template slot="content">
                <InventoryAttributeTable :inventoryData="styles" elementType="styles" />
            </template>
        </collapse-item>
      </collapse>
  </div>
</template>

<script>
import InventoryAttributeTable from '@/components/Inventory/InventoryAttributeTable';

export default {
    name: 'UnitCompetencies',
    components: {
        InventoryAttributeTable,
    },
    inject: {
        clickHandler: {
            default: () => {}
        }
    },
    computed: {
        abilities() {
            return this.$store.state.unit.unit.inventory.competencies.abilities;
        },
        interests() {
            return this.$store.state.unit.unit.inventory.competencies.interests;
        },
        knowledge() {
            return this.$store.state.unit.unit.inventory.competencies.knowledge;
        },
        skills() {
            return this.$store.state.unit.unit.inventory.competencies.skills;
        },
        styles() {
            return this.$store.state.unit.unit.inventory.competencies.styles;
        },
    }
}
</script>

<style lang="scss" scoped>
.UnitCompetencies {
    display: block;
}
</style>