export interface BtnConf {
  btnlabel: string;
  btnColor: string;
  btnAction:()=>void
}

export interface ItemConf {
  imageRequired: boolean;
  subtitleRequired: boolean;
  contentRequired: boolean;
  contentStrongItem1Required: boolean;
  contentStrongItem2Required: boolean;
  actionbtnrequired: boolean;
}

export interface ListItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;

  content: string;
  contentStrongItem1Label: string;
  contentStrongItem1Value: string;
  contentStrongItem2Label: string;
  contentStrongItem2Value: string;
    
  buttons: BtnConf[];
}
