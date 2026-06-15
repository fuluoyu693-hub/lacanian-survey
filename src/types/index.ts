export type DiscourseType = 'M' | 'U' | 'H' | 'A';
export type NeurosisType = 'Obs' | 'Hys';
export type ResultKey = `${DiscourseType}_${NeurosisType}`;

export interface DiscourseOption {
  text: string;
  value: DiscourseType;
}

export interface NeurosisOption {
  text: string;
  value: NeurosisType;
}

export interface DiscourseQuestion {
  id: number;
  type: 'discourse';
  text: string;
  options: DiscourseOption[];
}

export interface NeurosisQuestion {
  id: number;
  type: 'neurosis';
  text: string;
  options: NeurosisOption[];
}

export type Question = DiscourseQuestion | NeurosisQuestion;

export interface SurveyResult {
  key: ResultKey;
  title: string;
  subtitle: string;
  discourse: {
    name: string;
    label: string;
    description: string;
  };
  neurosis: {
    name: string;
    label: string;
    description: string;
  };
  reading: string;
  symptom: string;
  figure: string;
  figureNote: string;
}
