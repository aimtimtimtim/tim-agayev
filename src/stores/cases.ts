import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface CaseItem {
  id: string
  title: string
  description: string
  image: string
  situation: {
    title: string
    description: string
  }
  task: {
    title: string
    description: string
  }
  action: {
    title: string
    description: string
  }
  result: {
    title: string
    description: string
  }
}

export const useCasesStore = defineStore('cases', () => {
  const cases = ref<CaseItem[]>([
    {
      id: 'case-1',
      title: 'Case 1',
      description: 'Description for case 1',
      image: '/case-1.png',
      situation: {
        title: 'Situation',
        description: 'Описание ситуации и проблемы, которая была в начале проекта'
      },
      task: {
        title: 'Task',
        description: 'Описание задачи, которую нужно было решить'
      },
      action: {
        title: 'Action',
        description: 'Описание действий, которые были предприняты для решения задачи'
      },
      result: {
        title: 'Result',
        description: 'Описание результатов и достигнутых целей'
      }
    },
    {
      id: 'case-2',
      title: 'Case 2',
      description: 'Description for case 2',
      image: '/case-2.png',
      situation: {
        title: 'Situation',
        description: 'Описание ситуации и проблемы'
      },
      task: {
        title: 'Task',
        description: 'Описание задачи'
      },
      action: {
        title: 'Action',
        description: 'Описание действий'
      },
      result: {
        title: 'Result',
        description: 'Описание результатов'
      }
    },
    {
      id: 'case-3',
      title: 'Case 3',
      description: 'Description for case 3',
      image: '/case-3.png',
      situation: {
        title: 'Situation',
        description: 'Описание ситуации'
      },
      task: {
        title: 'Task',
        description: 'Описание задачи'
      },
      action: {
        title: 'Action',
        description: 'Описание действий'
      },
      result: {
        title: 'Result',
        description: 'Описание результатов'
      }
    },
    {
      id: 'case-4',
      title: 'Case 4',
      description: 'Description for case 4',
      image: '/case-4.png',
      situation: {
        title: 'Situation',
        description: 'Описание ситуации'
      },
      task: {
        title: 'Task',
        description: 'Описание задачи'
      },
      action: {
        title: 'Action',
        description: 'Описание действий'
      },
      result: {
        title: 'Result',
        description: 'Описание результатов'
      }
    }
  ])

  const getCaseById = (id: string) => {
    return cases.value.find(caseItem => caseItem.id === id)
  }

  const getAllCases = () => cases.value

  return {
    cases,
    getCaseById,
    getAllCases
  }
})
