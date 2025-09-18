import React from 'react';

export const GOALS: string[] = ['Absolute Sicherheit & keine Geldsorgen mehr', 'Die Freiheit, zu reisen und zu tun, was ich will', 'Anerkennung und der Beweis, dass ich es geschafft habe', 'Mehr Zeit für Familie und die wirklich wichtigen Dinge'];
export const TIME_INVESTMENTS: string[] = ['Ein paar Stunden zum Ausprobieren (1-5 Std./Woche)', 'So viel wie eine gute Serie pro Woche (5-10 Std.)', 'Ich bin bereit, meine Abende dafür zu opfern (10+ Std.)'];
export const OBSTACLES: string[] = ['Die Angst, Geld zu investieren und zu verlieren.', 'Das Gefühl, technisch nicht gut genug zu sein.', 'Der Zweifel, ob ICH das wirklich schaffen kann.', 'Der Wunsch, anonym zu bleiben und mich nicht zeigen zu müssen.', 'Die Überforderung durch zu viele Informationen.'];

export const EXPERIENCE_LEVELS: string[] = ['"Das leere Blatt" - Ich fange bei Null an.', '"Der ewige Rechercheur" - Viel gelesen, nichts umgesetzt.', '"Der gescheiterte Pionier" - Schon Dinge probiert, aber ohne Erfolg.'];
export const WORK_STYLES: string[] = ['Einer exakten Schritt-für-Schritt-Anleitung folgen.', 'Ein funktionierendes System sehen und es für mich anpassen.', 'Selbst ausprobieren und aus Fehlern lernen.'];
export const PRIORITIES: string[] = ['Schnelligkeit: Ich will so schnell wie möglich erste Ergebnisse sehen.', 'Stabilität: Ich möchte etwas Langfristiges aufbauen, auch wenn es länger dauert.', 'Anonymität: Ich möchte auf keinen Fall persönlich in Erscheinung treten.', 'Einfachheit: Die Technik darf nicht zu kompliziert sein.'];
export const INCOME_GOALS: string[] = ['Meine monatlichen Fixkosten (Miete, Rechnungen) wären gedeckt.', 'Ich könnte meinen aktuellen Job auf Teilzeit reduzieren.', 'Ich wäre finanziell komplett unabhängig.'];

export const quizSteps = [
    {
        question: "Stell dir vor, du bist in einem Jahr erfolgreich online. Welches Gefühl beschreibt diesen Erfolg am besten?",
        key: 'goal',
        options: GOALS,
    },
    {
        question: "Wie viel deiner 'freien Bildschirmzeit' (Netflix, Social Media etc.) wärst du bereit, für ein funktionierendes System einzutauschen?",
        key: 'timeInvestment',
        options: TIME_INVESTMENTS,
    },
    {
        question: "Ganz ehrlich: Was ist die EINE innere Stimme, die dich bisher am lautesten 'Stopp!' rufen ließ?",
        key: 'biggestObstacle',
        options: OBSTACLES,
    },
    {
        question: "Wenn dein bisheriger Weg im Online-Business ein Buch wäre, welchen Titel hätte es?",
        key: 'experience',
        options: EXPERIENCE_LEVELS,
    },
    {
        question: "Wie kommst du am besten ins Handeln?",
        key: 'workStyle',
        options: WORK_STYLES,
    },
    {
        question: "Was ist dir bei einem neuen System am allerwichtigsten?",
        key: 'priority',
        options: PRIORITIES,
    },
    {
        question: "Welcher finanzielle Meilenstein würde in deinem Leben WIRKLICH etwas verändern?",
        key: 'incomeGoal',
        options: INCOME_GOALS,
    },
];
