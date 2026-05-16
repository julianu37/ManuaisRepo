import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ManualViewController::show
 * @see app/Http/Controllers/ManualViewController.php:10
 * @route '/manual/{manual}/pagina/{page}'
 */
export const show = (args: { manual: string | number | { id: string | number }, page: string | number } | [manual: string | number | { id: string | number }, page: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/manual/{manual}/pagina/{page}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ManualViewController::show
 * @see app/Http/Controllers/ManualViewController.php:10
 * @route '/manual/{manual}/pagina/{page}'
 */
show.url = (args: { manual: string | number | { id: string | number }, page: string | number } | [manual: string | number | { id: string | number }, page: string | number ], options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{manual}', parsedArgs.manual.toString())
            .replace('{page}', parsedArgs.page.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ManualViewController::show
 * @see app/Http/Controllers/ManualViewController.php:10
 * @route '/manual/{manual}/pagina/{page}'
 */
show.get = (args: { manual: string | number | { id: string | number }, page: string | number } | [manual: string | number | { id: string | number }, page: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ManualViewController::show
 * @see app/Http/Controllers/ManualViewController.php:10
 * @route '/manual/{manual}/pagina/{page}'
 */
show.head = (args: { manual: string | number | { id: string | number }, page: string | number } | [manual: string | number | { id: string | number }, page: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ManualViewController::show
 * @see app/Http/Controllers/ManualViewController.php:10
 * @route '/manual/{manual}/pagina/{page}'
 */
    const showForm = (args: { manual: string | number | { id: string | number }, page: string | number } | [manual: string | number | { id: string | number }, page: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ManualViewController::show
 * @see app/Http/Controllers/ManualViewController.php:10
 * @route '/manual/{manual}/pagina/{page}'
 */
        showForm.get = (args: { manual: string | number | { id: string | number }, page: string | number } | [manual: string | number | { id: string | number }, page: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ManualViewController::show
 * @see app/Http/Controllers/ManualViewController.php:10
 * @route '/manual/{manual}/pagina/{page}'
 */
        showForm.head = (args: { manual: string | number | { id: string | number }, page: string | number } | [manual: string | number | { id: string | number }, page: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\ManualViewController::stream
 * @see app/Http/Controllers/ManualViewController.php:19
 * @route '/manual/{manual}/stream'
 */
export const stream = (args: { manual: string | number | { id: string | number } } | [manual: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
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
stream.url = (args: { manual: string | number | { id: string | number } } | [manual: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
stream.get = (args: { manual: string | number | { id: string | number } } | [manual: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stream.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ManualViewController::stream
 * @see app/Http/Controllers/ManualViewController.php:19
 * @route '/manual/{manual}/stream'
 */
stream.head = (args: { manual: string | number | { id: string | number } } | [manual: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stream.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ManualViewController::stream
 * @see app/Http/Controllers/ManualViewController.php:19
 * @route '/manual/{manual}/stream'
 */
    const streamForm = (args: { manual: string | number | { id: string | number } } | [manual: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: stream.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ManualViewController::stream
 * @see app/Http/Controllers/ManualViewController.php:19
 * @route '/manual/{manual}/stream'
 */
        streamForm.get = (args: { manual: string | number | { id: string | number } } | [manual: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stream.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ManualViewController::stream
 * @see app/Http/Controllers/ManualViewController.php:19
 * @route '/manual/{manual}/stream'
 */
        streamForm.head = (args: { manual: string | number | { id: string | number } } | [manual: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stream.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    stream.form = streamForm
const ManualViewController = { show, stream }

export default ManualViewController