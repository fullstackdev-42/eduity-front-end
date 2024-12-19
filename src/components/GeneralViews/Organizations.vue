<template>
<div class="Organizations mb-5">
    <div class="row">
      <div class="col-12 px-0">
        <CustomTable
          :data="userPermittedOrganizations"
          maxHeight="250"
          :clickEventHandler="clickEventHandler"
          elementType="organizations"
        >
          <template slot="table-header">
            <div class="d-flex justify-content-start align-items-center">
              <h2 class="m-0 ml-lg-5">My Organizations</h2>
              <ModalWrapper
                class="mx-5"
                buttonStyle="outline-primary"
                :buttonSize="checkWindowWidth"
                bodyClasses="px-0"
                modalClasses="modal-lg"
                ref="modal"
              >
                <h5 class="mb-0 d-flex align-items-center card-title" slot="header">
                  {{ modalHeader }}
                </h5>
                <keep-alive
                  slot="body"
                  :exclude="['NewJob']"
                >
                  <component
                    @submit="handleSubmit"
                    @activateUnitForm="wizardComponent = 'NewUnit'"
                    @activateJobForm="wizardComponent = 'NewJob'"
                    :is="wizardComponent"
                  ></component>
                </keep-alive>
              </ModalWrapper>
            </div>
          </template>
          <template slot="table-body">
            <el-table-column fixed label="Organization Name" property="name" min-width="170"></el-table-column>
            <el-table-column label="Date Founded" property="dateFounded" min-width="130"></el-table-column>
            <el-table-column label="Number of Employees" property="totalEmployees" min-width="206"></el-table-column>
            <el-table-column label="End of Financial Year" property="financialYearEnds" min-width="207"></el-table-column>
            <el-table-column label="Administrator" property="administrator" min-width="151"></el-table-column>
          </template>
        </CustomTable>
      </div>
    </div>
    <div class="row">
      <div class="col-12 px-0">
        <CustomTable
          :data="organizations"
          maxHeight="250"
          :clickEventHandler="clickEventHandler"
          elementType="organizations"
        >
          <template slot="table-header">
            <div class="d-flex justify-content-start align-items-center">
              <h2 class="m-0 ml-lg-5">All Organizations</h2>
              <ActionDropdown
                class="mx-5"
                :buttonSize="checkWindowWidth"
              />
            </div>
          </template>
          <template slot="table-body">
            <el-table-column fixed label="Organization Name" property="name" min-width="170"></el-table-column>
            <el-table-column label="Date Founded" property="dateFounded" min-width="142"></el-table-column>
            <el-table-column label="Number of Employees" property="totalEmployees" min-width="206"></el-table-column>
            <el-table-column label="End of Financial Year" property="financialYearEnds" min-width="207"></el-table-column>
            <el-table-column label="Administrator" property="administrator" min-width="151"></el-table-column>
          </template>
      ` </CustomTable>
      </div>
    </div>
  </div>
</template>

<script>
import CustomTable from '@/components/UIComponents/CustomUIComponents/CustomTable';
import ActionDropdown from '@/components/UIComponents/CustomUIComponents/ActionDropdown';
import ModalWrapper from '@/components/UIComponents/CustomUIComponents/ModalWrapper';
import NewOrganization from '@/components/Forms/NewOrganization';
import NewUnit from '@/components/Forms/NewUnit';
import NewJob from '@/components/Forms/NewJob';
import mockData from '@/mockData';

export default {
    name: 'Organizations',
    components: {
        CustomTable,
        ActionDropdown,
        ModalWrapper,
        NewOrganization,
        NewUnit,
        NewJob
    },
    data() {
      return {
        windowWidth: window.innerWidth,
        wizardComponent: 'NewOrganization'
      }
    },
    created() {
        this.fetchOrganizations();
    },
    mounted() {
      this.$nextTick(() => {
        window.addEventListener('resize', this.setWindowWidth);
      })
    },
    beforeDestroy() { 
      window.removeEventListener('resize', this.setWindowWidth); 
    },
    methods: {
        clickEventHandler(row) {
            const organizationId = row.id;
            if (row.userHasPermission) { 
                this.$router.push(`/organization/${organizationId}`)
            } else {
                this.$router.push(`/public/organization/${organizationId}`)
            };
        },
        fetchOrganizations() {
            this.$store.commit('setOrganizations', mockData.getAll('organizations'));
        },
        handleSubmit(dispatch, wizardComponent) {
          this.$store.dispatch(dispatch);
          this.wizardComponent = wizardComponent;
          if (dispatch === 'submitOrganization' && this.$refs.modal !== undefined) {
              this.$refs.modal.toggleModal();
          }
        },
        setWindowWidth() {
          this.windowWidth = window.innerWidth;
        },
    },
    computed: {
      checkWindowWidth() {
        if (this.windowWidth <= 576) {
          return 'sm'
        }
      },
      organizations() {
            return this.$store.getters.organizations;
      },
      userPermittedOrganizations() {
            return this.$store.getters.organizations.filter(x => x.userHasPermission);
      },
      modalHeader() {
        if (this.wizardComponent === 'NewOrganization') {
          return 'Add Organization';
        } else if (this.wizardComponent === 'NewUnit') {
          return 'Add Unit';
        } else {
          return 'Add Job';
        }
      }
    },
}
</script>

<style lang="scss" scoped>
.Organizations {
    display: block;
    @media only screen and (max-width: 768px) {
        h2 {
          font-size: 30px;
        }
    }
    @media only screen and (max-width: 360px) {
        h2 {
          font-size: 15px;
        }
    }
}
</style>