<template>
  <div>
    <input v-model="keyword" />
    <button @click="searchOnet">Search</button>
    <button @click="clearSearch">Clear</button>
    <button @click="CareerDetails">Career Details</button>
    <h1 v-if="errorMsg">{{errorDetails}}</h1>
    <div v-else class="row">
      <div class="col-6">
        <ul>
          <li v-for="occupation in occupations" :key="occupation.code">
            <router-link :to="`/job/${occupation.code}`">{{ occupation.title }}</router-link>
          </li>
      </ul>
      </div>
      <div class="col-6">
        <div v-if="currentOccupationDetails.abilities">
          <h6>Abilities</h6>
          <ul>
            <li v-for="ability in currentOccupationDetails.abilities.group" :key="ability.title.id">{{ability.title.name}}</li>
          </ul>
        </div>
        <div v-if="currentOccupationDetails && currentOccupationDetails.career">
          <h6>What they do</h6>
          <p>{{currentOccupationDetails.career.what_they_do}}</p>
        </div>
        <div v-if="currentOccupationDetails.education">
          <h6>Education Needed</h6>
          <ul v-if="currentOccupationDetails.education.education_usually_needed && currentOccupationDetails.education">
            <li v-for="ed in currentOccupationDetails.education.education_usually_needed.category" :key="ed">{{ed}}</li>
          </ul>
        </div>
        <div v-if="currentOccupationDetails.explore_more">
          <h6>Careers</h6>
          <ul v-if="currentOccupationDetails.explore_more.careers && currentOccupationDetails.explore_more.careers.career">
            <li v-for="career in currentOccupationDetails.explore_more.careers.career" :key="career.title">{{career.title}}</li>
          </ul>
        </div>
        <div v-if="currentOccupationDetails.job_outlook">
          <h6>Outlook</h6>
          <p v-if="currentOccupationDetails.job_outlook.outlook">{{currentOccupationDetails.job_outlook.outlook.category}}</p>
          <p>{{currentOccupationDetails.job_outlook.outlook.description}}</p>
          <h6>Salary</h6>
          <p>{{currentOccupationDetails.job_outlook.salary.annual_10th_percentile}} - {{currentOccupationDetails.job_outlook.salary.annual_90th_percentile_over}}</p>
        </div>
        <div v-if="currentOccupationDetails.knowledge">
          <h6>Knowledge</h6>
          <ul>
            <li v-for="knowledge in currentOccupationDetails.knowledge.group" :key="knowledge.title.id">{{knowledge.title.name}}</li>
            </ul>
        </div>
        <div v-if="currentOccupationDetails.personality">
          <h6>Top Interest</h6>
          <p>{{currentOccupationDetails.personality.top_interest.title}}</p>
          <p>{{currentOccupationDetails.personality.top_interest.description}}</p>
          <ul>
            <li v-for="style in currentOccupationDetails.personality.work_styles.element" :key="style.id">{{style.name}}</li>
          </ul>
        </div>
        <div v-if="currentOccupationDetails.skills">
          <h6>Skills</h6>
          <ul>
            <li v-for="skill in currentOccupationDetails.skills.group" :key="skill.title.id">{{skill.title.name}}</li>
          </ul>
        </div>
        <div v-if="currentOccupationDetails.technology">
          <h6>Technology</h6>
          <ul v-if="currentOccupationDetails.technology">
            <li v-for="tech in currentOccupationDetails.technology.category" :key="tech.title.name">{{tech.title.name}}</li>
          </ul>
        </div>
        <div v-if="currentOccupationDetails.where_do_they_work">
          <h6>industry</h6>
          <ul>
            <li v-for="industry in currentOccupationDetails.where_do_they_work.industry" :key="industry.code">{{industry.title}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OnetWebService from '@/services/onet.service.js'

export default {
    name: 'JobTemplates',
    components: {
    },
    data() {
      return {
        users: [],
        keyword: '',
        occupations: [],
        currentOccupationDetails: {},
        errorMsg: false,
        errorDetails: ""

      }
    },
    methods: {
      async searchOnet() {
        let con = await OnetWebService.KeyWordsSearch(this.keyword)
        this.occupations = con.data.occupation
      },
      clearSearch(){
        this.keyword = ''
        this.occupations = []
        this.currentOccupationDetails = {}
      },
      async CareerDetails(code) {
        this.currentOccupationDetails = {}
        let details = await OnetWebService.FullCareerReport(code)
        if(typeof details === 'object') {
          this.currentOccupationDetails = details.data
          console.log("details", details.data)
        } else {
          this.errorMsg = true
          this.errorDetails =  details
        }
      }
    },
}
</script>

<style>

</style>