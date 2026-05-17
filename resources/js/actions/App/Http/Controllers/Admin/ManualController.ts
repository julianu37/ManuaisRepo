import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ManualController::index
 * @see app/Http/Controllers/Admin/ManualController.php:14
 * @route '/dashboard/manuais'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/manuais',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ManualController::index
 * @see app/Http/Controllers/Admin/ManualController.php:14
 * @route '/dashboard/manuais'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ManualController::index
 * @see app/Http/Controllers/Admin/ManualController.php:14
 * @route '/dashboard/manuais'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ManualController::index
 * @see app/Http/Controllers/Admin/ManualController.php:14
 * @route '/dashboard/manuais'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ManualController::index
 * @see app/Http/Controllers/Admin/ManualController.php:14
 * @route '/dashboard/manuais'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ManualController::index
 * @see app/Http/Controllers/Admin/ManualController.php:14
 * @route '/dashboard/manuais'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ManualController::index
 * @see app/Http/Controllers/Admin/ManualController.php:14
 * @route '/dashboard/manuais'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Admin\ManualController::create
 * @see app/Http/Controllers/Admin/ManualController.php:20
 * @route '/dashboard/manuais/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/manuais/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ManualController::create
 * @see app/Http/Controllers/Admin/ManualController.php:20
 * @route '/dashboard/manuais/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ManualController::create
 * @see app/Http/Controllers/Admin/ManualController.php:20
 * @route '/dashboard/manuais/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ManualController::create
 * @see app/Http/Controllers/Admin/ManualController.php:20
 * @route '/dashboard/manuais/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ManualController::create
 * @see app/Http/Controllers/Admin/ManualController.php:20
 * @route '/dashboard/manuais/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ManualController::create
 * @see app/Http/Controllers/Admin/ManualController.php:20
 * @route '/dashboard/manuais/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ManualController::create
 * @see app/Http/Controllers/Admin/ManualController.php:20
 * @route '/dashboard/manuais/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Admin\ManualController::store
 * @see app/Http/Controllers/Admin/ManualController.php:26
 * @route '/dashboard/manuais'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/manuais',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\ManualController::store
 * @see app/Http/Controllers/Admin/ManualController.php:26
 * @route '/dashboard/manuais'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ManualController::store
 * @see app/Http/Controllers/Admin/ManualController.php:26
 * @route '/dashboard/manuais'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\ManualController::store
 * @see app/Http/Controllers/Admin/ManualController.php:26
 * @route '/dashboard/manuais'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ManualController::store
 * @see app/Http/Controllers/Admin/ManualController.php:26
 * @route '/dashboard/manuais'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\ManualController::show
 * @see app/Http/Controllers/Admin/ManualController.php:106
 * @route '/dashboard/manuais/{manual}'
 */
export const show = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/manuais/{manual}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ManualController::show
 * @see app/Http/Controllers/Admin/ManualController.php:106
 * @route '/dashboard/manuais/{manual}'
 */
show.url = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{manual}', parsedArgs.manual.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ManualController::show
 * @see app/Http/Controllers/Admin/ManualController.php:106
 * @route '/dashboard/manuais/{manual}'
 */
show.get = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ManualController::show
 * @see app/Http/Controllers/Admin/ManualController.php:106
 * @route '/dashboard/manuais/{manual}'
 */
show.head = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ManualController::show
 * @see app/Http/Controllers/Admin/ManualController.php:106
 * @route '/dashboard/manuais/{manual}'
 */
    const showForm = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ManualController::show
 * @see app/Http/Controllers/Admin/ManualController.php:106
 * @route '/dashboard/manuais/{manual}'
 */
        showForm.get = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ManualController::show
 * @see app/Http/Controllers/Admin/ManualController.php:106
 * @route '/dashboard/manuais/{manual}'
 */
        showForm.head = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\ManualController::edit
 * @see app/Http/Controllers/Admin/ManualController.php:114
 * @route '/dashboard/manuais/{manual}/edit'
 */
export const edit = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/manuais/{manual}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ManualController::edit
 * @see app/Http/Controllers/Admin/ManualController.php:114
 * @route '/dashboard/manuais/{manual}/edit'
 */
edit.url = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{manual}', parsedArgs.manual.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ManualController::edit
 * @see app/Http/Controllers/Admin/ManualController.php:114
 * @route '/dashboard/manuais/{manual}/edit'
 */
edit.get = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ManualController::edit
 * @see app/Http/Controllers/Admin/ManualController.php:114
 * @route '/dashboard/manuais/{manual}/edit'
 */
edit.head = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ManualController::edit
 * @see app/Http/Controllers/Admin/ManualController.php:114
 * @route '/dashboard/manuais/{manual}/edit'
 */
    const editForm = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ManualController::edit
 * @see app/Http/Controllers/Admin/ManualController.php:114
 * @route '/dashboard/manuais/{manual}/edit'
 */
        editForm.get = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ManualController::edit
 * @see app/Http/Controllers/Admin/ManualController.php:114
 * @route '/dashboard/manuais/{manual}/edit'
 */
        editForm.head = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\Admin\ManualController::update
 * @see app/Http/Controllers/Admin/ManualController.php:122
 * @route '/dashboard/manuais/{manual}'
 */
export const update = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/manuais/{manual}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\ManualController::update
 * @see app/Http/Controllers/Admin/ManualController.php:122
 * @route '/dashboard/manuais/{manual}'
 */
update.url = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{manual}', parsedArgs.manual.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ManualController::update
 * @see app/Http/Controllers/Admin/ManualController.php:122
 * @route '/dashboard/manuais/{manual}'
 */
update.put = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\ManualController::update
 * @see app/Http/Controllers/Admin/ManualController.php:122
 * @route '/dashboard/manuais/{manual}'
 */
update.patch = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\ManualController::update
 * @see app/Http/Controllers/Admin/ManualController.php:122
 * @route '/dashboard/manuais/{manual}'
 */
    const updateForm = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ManualController::update
 * @see app/Http/Controllers/Admin/ManualController.php:122
 * @route '/dashboard/manuais/{manual}'
 */
        updateForm.put = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Admin\ManualController::update
 * @see app/Http/Controllers/Admin/ManualController.php:122
 * @route '/dashboard/manuais/{manual}'
 */
        updateForm.patch = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Admin\ManualController::destroy
 * @see app/Http/Controllers/Admin/ManualController.php:130
 * @route '/dashboard/manuais/{manual}'
 */
export const destroy = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/manuais/{manual}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\ManualController::destroy
 * @see app/Http/Controllers/Admin/ManualController.php:130
 * @route '/dashboard/manuais/{manual}'
 */
destroy.url = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{manual}', parsedArgs.manual.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ManualController::destroy
 * @see app/Http/Controllers/Admin/ManualController.php:130
 * @route '/dashboard/manuais/{manual}'
 */
destroy.delete = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\ManualController::destroy
 * @see app/Http/Controllers/Admin/ManualController.php:130
 * @route '/dashboard/manuais/{manual}'
 */
    const destroyForm = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ManualController::destroy
 * @see app/Http/Controllers/Admin/ManualController.php:130
 * @route '/dashboard/manuais/{manual}'
 */
        destroyForm.delete = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\Admin\ManualController::reprocess
 * @see app/Http/Controllers/Admin/ManualController.php:95
 * @route '/dashboard/manuais/{manual}/reprocessar'
 */
export const reprocess = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reprocess.url(args, options),
    method: 'post',
})

reprocess.definition = {
    methods: ["post"],
    url: '/dashboard/manuais/{manual}/reprocessar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\ManualController::reprocess
 * @see app/Http/Controllers/Admin/ManualController.php:95
 * @route '/dashboard/manuais/{manual}/reprocessar'
 */
reprocess.url = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return reprocess.definition.url
            .replace('{manual}', parsedArgs.manual.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ManualController::reprocess
 * @see app/Http/Controllers/Admin/ManualController.php:95
 * @route '/dashboard/manuais/{manual}/reprocessar'
 */
reprocess.post = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reprocess.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\ManualController::reprocess
 * @see app/Http/Controllers/Admin/ManualController.php:95
 * @route '/dashboard/manuais/{manual}/reprocessar'
 */
    const reprocessForm = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reprocess.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ManualController::reprocess
 * @see app/Http/Controllers/Admin/ManualController.php:95
 * @route '/dashboard/manuais/{manual}/reprocessar'
 */
        reprocessForm.post = (args: { manual: number | { id: number } } | [manual: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reprocess.url(args, options),
            method: 'post',
        })
    
    reprocess.form = reprocessForm
const ManualController = { index, create, store, show, edit, update, destroy, reprocess }

export default ManualController