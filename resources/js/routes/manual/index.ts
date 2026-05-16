import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ManualViewController::view
 * @see app/Http/Controllers/ManualViewController.php:10
 * @route '/manual/{manual}/pagina/{page}'
 */
export const view = (args: { manual: number | { id: number }, page: string | number } | [manual: number | { id: number }, page: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/manual/{manual}/pagina/{page}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ManualViewController::view
 * @see app/Http/Controllers/ManualViewController.php:10
 * @route '/manual/{manual}/pagina/{page}'
 */
view.url = (args: { manual: number | { id: number }, page: string | number } | [manual: number | { id: number }, page: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    manual: args[0],
                    page: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        manual: typeof args.manual === 'object'
                ? args.manual.id
                : args.manual,
                                page: args.page,
                }

    return view.definition.url
            .replace('{manual}', parsedArgs.manual.toString())
            .replace('{page}', parsedArgs.page.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ManualViewController::view
 * @see app/Http/Controllers/ManualViewController.php:10
 * @route '/manual/{manual}/pagina/{page}'
 */
view.get = (args: { manual: number | { id: number }, page: string | number } | [manual: number | { id: number }, page: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ManualViewController::view
 * @see app/Http/Controllers/ManualViewController.php:10
 * @route '/manual/{manual}/pagina/{page}'
 */
view.head = (args: { manual: number | { id: number }, page: string | number } | [manual: number | { id: number }, page: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ManualViewController::view
 * @see app/Http/Controllers/ManualViewController.php:10
 * @route '/manual/{manual}/pagina/{page}'
 */
    const viewForm = (args: { manual: number | { id: number }, page: string | number } | [manual: number | { id: number }, page: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: view.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ManualViewController::view
 * @see app/Http/Controllers/ManualViewController.php:10
 * @route '/manual/{manual}/pagina/{page}'
 */
        viewForm.get = (args: { manual: number | { id: number }, page: string | number } | [manual: number | { id: number }, page: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: view.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ManualViewController::view
 * @see app/Http/Controllers/ManualViewController.php:10
 * @route '/manual/{manual}/pagina/{page}'
 */
        viewForm.head = (args: { manual: number | { id: number }, page: string | number } | [manual: number | { id: number }, page: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: view.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    view.form = viewForm
/**
* @see \App\Http\Controllers\ManualViewController::stream
 * @see app/Http/Controllers/ManualViewController.php:19
 * @route '/manual/{manual}/stream'
 */
export const stream = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stream.url(args, options),
    method: 'get',
})

stream.definition = {
    methods: ["get","head"],
    url: '/manual/{manual}/stream',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ManualViewController::stream
 * @see app/Http/Controllers/ManualViewController.php:19
 * @route '/manual/{manual}/stream'
 */
stream.url = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { manual: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { manual: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    manual: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        manual: typeof args.manual === 'object'
                ? args.manual.id
                : args.manual,
                }

    return stream.definition.url
            .replace('{manual}', parsedArgs.manual.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ManualViewController::stream
 * @see app/Http/Controllers/ManualViewController.php:19
 * @route '/manual/{manual}/stream'
 */
stream.get = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stream.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ManualViewController::stream
 * @see app/Http/Controllers/ManualViewController.php:19
 * @route '/manual/{manual}/stream'
 */
stream.head = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stream.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ManualViewController::stream
 * @see app/Http/Controllers/ManualViewController.php:19
 * @route '/manual/{manual}/stream'
 */
    const streamForm = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: stream.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ManualViewController::stream
 * @see app/Http/Controllers/ManualViewController.php:19
 * @route '/manual/{manual}/stream'
 */
        streamForm.get = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stream.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ManualViewController::stream
 * @see app/Http/Controllers/ManualViewController.php:19
 * @route '/manual/{manual}/stream'
 */
        streamForm.head = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stream.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    stream.form = streamForm
const manual = {
    view: Object.assign(view, view),
stream: Object.assign(stream, stream),
}

export default manual