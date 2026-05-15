export type * from './auth';
export type * from './navigation';
export type * from './ui';

export interface Brand {
    id: number;
    name: string;
    slug: string;
    logo_path?: string;
    error_patterns?: any;
    printer_models?: PrinterModel[];
}

export interface PrinterModel {
    id: number;
    brand_id: number;
    name: string;
    slug: string;
    brand?: Brand;
    manuals?: Manual[];
}

export interface Manual {
    id: number;
    printer_model_id: number;
    title: string;
    file_path: string;
    original_filename: string;
    total_pages: number;
    file_size_bytes: number;
    status: 'pending' | 'processing' | 'indexed' | 'failed';
    processing_error?: string;
    indexed_at?: string;
    created_at: string;
    updated_at: string;
    printer_model?: PrinterModel;
}

export interface ErrorCode {
    id: number;
    manual_id: number;
    code: string;
    description?: string;
    page_number: number;
    raw_context?: string;
    manual?: Manual;
}
