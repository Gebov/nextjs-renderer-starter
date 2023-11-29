
import { Metadata } from 'next';
import { cookies } from 'next/headers';

import { RenderPage, initRendering } from '@progress/sitefinity-react-framework';
import { pageMetadata } from '@progress/sitefinity-react-framework';
import { widgetRegistry } from '@progress/sitefinity-react-framework';
import { WidgetExecutionError } from '@progress/sitefinity-react-framework';

export async function generateMetadata({ params, searchParams }: any): Promise<Metadata> {
    initRendering(widgetRegistry, WidgetExecutionError);
    return await pageMetadata({ params, searchParams, cookie: cookies().toString() });
}

export default async function Page({ params, searchParams }: any) {
    initRendering(widgetRegistry, WidgetExecutionError);
    return RenderPage({ params, searchParams, cookie: cookies().toString() });
}