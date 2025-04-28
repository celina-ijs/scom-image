import { IDataSchema } from "@ijstech/components";

export interface ICommand {
  execute(): void;
  undo(): void;
  redo(): void;
}

export interface IPageBlockAction {
	name: string;
	icon: string;
	command: (builder: any, userInputData: any) => ICommand;
	userInputDataSchema: IDataSchema;
}

export interface PageBlock {
  // Properties
  getActions: () => IPageBlockAction[];
  getData: () => any;
  setData: (data: any) => Promise<void>;
  getTag: () => any;
  setTag: (tag: any) => Promise<void>
  defaultEdit?: boolean;
  tag?: any;
  validate?: () => boolean;

  // Page Events
  readonly onEdit: () => Promise<void>;
  readonly onConfirm: () => Promise<void>;
  readonly onDiscard: () => Promise<void>;
  // onClear: () => void;

  // Page Block Events
  edit: () => Promise<void>;
  confirm: () => Promise<void>;
  discard: () => Promise<void>;
}

export interface IImage {
  cid?: string;
	url: string;
  fallbackUrl?: string;
	altText?: string;
  backgroundColor?: string;
	link?: string;
  photoId?: string;
  keyword?: string;
  cropData?: ICropData;
  canUpload?: boolean;
}

export enum CropType {
  PREEFORM = 'Freeform',
  CIRCLE = 'Circle'
}

export interface ICropData {
  width: number;
  height: number;
  left: number;
  top: number;
  aspectRatio?: string;
  type: CropType;
  locked?: boolean;
}

export type executeFnType = (editor: any, block: any) => void;
