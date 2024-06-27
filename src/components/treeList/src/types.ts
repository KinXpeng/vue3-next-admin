export interface ITreeItem {
  label: string
  children?: ITreeItem[]
  id?: number | string
  [propname: string]: any
}

export interface IProps {
  label: string
  children: string
}
