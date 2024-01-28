

export class Workout {
    constructor(name) {
        this.name = name;
    }
}

export class CalorieEntry {
    constructor(label, calories) {
        this.label = label;
        this.calories = calories;
    }
}

export class MeditationData {
    constructor(minutes, moodBefore, moodAfter) {
        this.minutes = minutes;
        this.moodBefore = moodBefore;
        this.moodAfter = moodAfter;
    }
}
