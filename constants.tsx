import React from 'react';
import {
    Box, Maximize, Grid, AlignCenter, FileText, BoxSelect, List, Square, Link, 
    MousePointerClick, Type as HeadingIcon, Text as TextLines, ExternalLink, 
    AlignLeft, Quote, Database, Image as ImageIcon, PlayCircle, Youtube, Layout, 
    TextCursorInput, CheckSquare, Search as SearchIcon, Home, MoreHorizontal
} from 'lucide-react';
import { ElementLibrary, BackgroundStyle } from './types';

export const API_URL = '/api';

export const ELEMENT_LIBRARY: ElementLibrary = {
    Structure: [
        { id: 'section', name: 'Section', icon: <Box size={20} strokeWidth={1.2} /> },
        { id: 'container', name: 'Container', icon: <Maximize size={20} strokeWidth={1.2} /> },
        { id: 'quick-stack', name: 'Quick stack', icon: <Grid size={20} strokeWidth={1.2} /> },
        { id: 'v-flex', name: 'V flex', icon: <AlignCenter size={20} strokeWidth={1.2} className="rotate-90" /> },
        { id: 'h-flex', name: 'H flex', icon: <AlignCenter size={20} strokeWidth={1.2} /> },
        { id: 'page-slot', name: 'Page slot', icon: <FileText size={20} strokeWidth={1.2} /> },
    ],
    Basic: [
        { id: 'div-block', name: 'Div block', icon: <BoxSelect size={20} strokeWidth={1.2} /> },
        { id: 'list', name: 'List', icon: <List size={20} strokeWidth={1.2} /> },
        { id: 'list-item', name: 'List item', icon: <Square size={20} strokeWidth={1.2} /> },
        { id: 'link-block', name: 'Link block', icon: <Link size={20} strokeWidth={1.2} /> },
        { id: 'button', name: 'Button', icon: <MousePointerClick size={20} strokeWidth={1.2} /> },
    ],
    Typography: [
        { id: 'heading', name: 'Heading', icon: <HeadingIcon size={20} strokeWidth={1.2} /> },
        { id: 'paragraph', name: 'Paragraph', icon: <TextLines size={20} strokeWidth={1.2} /> },
        { id: 'text-link', name: 'Text link', icon: <ExternalLink size={20} strokeWidth={1.2} /> },
        { id: 'text-block', name: 'Text block', icon: <AlignLeft size={20} strokeWidth={1.2} /> },
        { id: 'block-quote', name: 'Block quote', icon: <Quote size={20} strokeWidth={1.2} /> },
        { id: 'rich-text', name: 'Rich text', icon: <FileText size={20} strokeWidth={1.2} /> },
    ],
    Cms: [
        { id: 'collection-list', name: 'Collection list', icon: <Database size={20} strokeWidth={1.2} /> },
    ],
    Media: [
        { id: 'image', name: 'Image', icon: <ImageIcon size={20} strokeWidth={1.2} /> },
        { id: 'video', name: 'Video', icon: <PlayCircle size={20} strokeWidth={1.2} /> },
        { id: 'youtube', name: 'Youtube', icon: <Youtube size={20} strokeWidth={1.2} /> },
    ],
    Forms: [
        { id: 'form-block', name: 'Form block', icon: <Layout size={20} strokeWidth={1.2} /> },
        { id: 'input', name: 'Input', icon: <TextCursorInput size={20} strokeWidth={1.2} /> },
        { id: 'checkbox', name: 'Checkbox', icon: <CheckSquare size={20} strokeWidth={1.2} /> },
    ],
    Advanced: [
        { id: 'search', name: 'Search', icon: <SearchIcon size={20} strokeWidth={1.2} /> },
        { id: 'navbar', name: 'Navbar', icon: <Home size={20} strokeWidth={1.2} /> },
        { id: 'slider', name: 'Slider', icon: <MoreHorizontal size={20} strokeWidth={1.2} /> },
    ]
};

export const BACKGROUND_STYLES: BackgroundStyle[] = [
    { id: 'minimal', name: 'Pure canvas', class: 'bg-white' },
    { id: 'mesh', name: 'Aurora mesh', class: 'bg-mesh-light' },
    { id: 'glass', name: 'Geometric glass', class: 'bg-glass-pattern' }
];