<template>
  <div id="daily-journal">
    <h2>Daily Journal</h2>
    <button @click="showAddEntryModal = true">Add Entry</button>

    <journal-entry
        v-for="entry in entries"
        :key="entry.id"
        :entry="entry"
    />

    <div v-if="showAddEntryModal" class="modal">
      <h3>Add Journal Entry</h3>
      <input type="date" v-model="newEntryDate" />
      <textarea v-model="newEntryContent" placeholder="Write your thoughts..."></textarea>
      <button @click="addEntry">Add</button>
      <button @click="showAddEntryModal = false">Cancel</button>
    </div>

    <journal-manager
        :entries="entries"
        @update-entries="loadEntries"
    />
  </div>
</template>

<script>
import JournalEntry from './JournalEntry.vue';
import JournalManager from './JournalManager.vue';
import { addJournalEntry, getJournalEntries } from '@/journalService';

export default {
  name: 'DailyJournal',
  components: {
    JournalEntry,
    JournalManager
  },
  data() {
    return {
      entries: [],
      showAddEntryModal: false,
      newEntryDate: new Date().toISOString().split('T')[0],
      newEntryContent: ''
    };
  },
  created() {
    this.loadEntries();
  },
  methods: {
    async addEntry() {
      const newEntry = {
        date: this.newEntryDate,
        content: this.newEntryContent
      };
      await addJournalEntry(newEntry);
      this.loadEntries();
      this.newEntryContent = '';
      this.showAddEntryModal = false;
    },
    async loadEntries() {
      this.entries = await getJournalEntries();
    }
  }
}
</script>

<style scoped>

</style>
