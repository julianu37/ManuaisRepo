import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\PrinterModelController::index
 * @see app/Http/Controllers/Admin/PrinterModelController.php:13
 * @route '/dashboard/modelos'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/modelos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PrinterModelController::index
 * @see app/Http/Controllers/Admin/PrinterModelController.php:13
 * @route '/dashboard/modelos'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PrinterModelController::index
 * @see app/Http/Controllers/Admin/PrinterModelController.php:13
 * @route '/dashboard/modelos'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\PrinterModelController::index
 * @see app/Http/Controllers/Admin/PrinterModelController.php:13
 * @route '/dashboard/modelos'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\PrinterModelController::index
 * @see app/Http/Controllers/Admin/PrinterModelController.php:13
 * @route '/dashboard/modelos'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\PrinterModelController::index
 * @see app/Http/Controllers/Admin/PrinterModelController.php:13
 * @route '/dashboard/modelos'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\PrinterModelController::index
 * @see app/Http/Controllers/Admin/PrinterModelController.php:13
 * @route '/dashboard/modelos'
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
* @see \App\Http\Controllers\Admin\PrinterModelController::create
 * @see app/Http/Controllers/Admin/PrinterModelController.php:19
 * @route '/dashboard/modelos/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/modelos/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PrinterModelController::create
 * @see app/Http/Controllers/Admin/PrinterModelController.php:19
 * @route '/dashboard/modelos/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PrinterModelController::create
 * @see app/Http/Controllers/Admin/PrinterModelController.php:19
 * @route '/dashboard/modelos/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\PrinterModelController::create
 * @see app/Http/Controllers/Admin/PrinterModelController.php:19
 * @route '/dashboard/modelos/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\PrinterModelController::create
 * @see app/Http/Controllers/Admin/PrinterModelController.php:19
 * @route '/dashboard/modelos/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\PrinterModelController::create
 * @see app/Http/Controllers/Admin/PrinterModelController.php:19
 * @route '/dashboard/modelos/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\PrinterModelController::create
 * @see app/Http/Controllers/Admin/PrinterModelController.php:19
 * @route '/dashboard/modelos/create'
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
* @see \App\Http\Controllers\Admin\PrinterModelController::store
 * @see app/Http/Controllers/Admin/PrinterModelController.php:25
 * @route '/dashboard/modelos'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/modelos',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\PrinterModelController::store
 * @see app/Http/Controllers/Admin/PrinterModelController.php:25
 * @route '/dashboard/modelos'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PrinterModelController::store
 * @see app/Http/Controllers/Admin/PrinterModelController.php:25
 * @route '/dashboard/modelos'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\PrinterModelController::store
 * @see app/Http/Controllers/Admin/PrinterModelController.php:25
 * @route '/dashboard/modelos'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\PrinterModelController::store
 * @see app/Http/Controllers/Admin/PrinterModelController.php:25
 * @route '/dashboard/modelos'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\PrinterModelController::show
 * @see app/Http/Controllers/Admin/PrinterModelController.php:41
 * @route '/dashboard/modelos/{printerModel}'
 */
export const show = (args: { printerModel: number | { id: number } } | [printerModel: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/modelos/{printerModel}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PrinterModelController::show
 * @see app/Http/Controllers/Admin/PrinterModelController.php:41
 * @route '/dashboard/modelos/{printerModel}'
 */
show.url = (args: { printerModel: number | { id: number } } | [printerModel: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { printerModel: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { printerModel: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    printerModel: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        printerModel: typeof args.printerModel === 'object'
                ? args.printerModel.id
                : args.printerModel,
                }

    return show.definition.url
            .replace('{printerModel}', parsedArgs.printerModel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PrinterModelController::show
 * @see app/Http/Controllers/Admin/PrinterModelController.php:41
 * @route '/dashboard/modelos/{printerModel}'
 */
show.get = (args: { printerModel: number | { id: number } } | [printerModel: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\PrinterModelController::show
 * @see app/Http/Controllers/Admin/PrinterModelController.php:41
 * @route '/dashboard/modelos/{printerModel}'
 */
show.head = (args: { printerModel: number | { id: number } } | [printerModel: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\PrinterModelController::show
 * @see app/Http/Controllers/Admin/PrinterModelController.php:41
 * @route '/dashboard/modelos/{printerModel}'
 */
    const showForm = (args: { printerModel: number | { id: number } } | [printerModel: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\PrinterModelController::show
 * @see app/Http/Controllers/Admin/PrinterModelController.php:41
 * @route '/dashboard/modelos/{printerModel}'
 */
        showForm.get = (args: { printerModel: number | { id: number } } | [printerModel: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\PrinterModelController::show
 * @see app/Http/Controllers/Admin/PrinterModelController.php:41
 * @route '/dashboard/modelos/{printerModel}'
 */
        showForm.head = (args: { printerModel: number | { id: number } } | [printerModel: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\PrinterModelController::edit
 * @see app/Http/Controllers/Admin/PrinterModelController.php:42
 * @route '/dashboard/modelos/{printerModel}/edit'
 */
export const edit = (args: { printerModel: number | { id: number } } | [printerModel: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/modelos/{printerModel}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PrinterModelController::edit
 * @see app/Http/Controllers/Admin/PrinterModelController.php:42
 * @route '/dashboard/modelos/{printerModel}/edit'
 */
edit.url = (args: { printerModel: number | { id: number } } | [printerModel: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { printerModel: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { printerModel: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    printerModel: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        printerModel: typeof args.printerModel === 'object'
                ? args.printerModel.id
                : args.printerModel,
                }

    return edit.definition.url
            .replace('{printerModel}', parsedArgs.printerModel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PrinterModelController::edit
 * @see app/Http/Controllers/Admin/PrinterModelController.php:42
 * @route '/dashboard/modelos/{printerModel}/edit'
 */
edit.get = (args: { printerModel: number | { id: number } } | [printerModel: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\PrinterModelController::edit
 * @see app/Http/Controllers/Admin/PrinterModelController.php:42
 * @route '/dashboard/modelos/{printerModel}/edit'
 */
edit.head = (args: { printerModel: number | { id: number } } | [printerModel: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\PrinterModelController::edit
 * @see app/Http/Controllers/Admin/PrinterModelController.php:42
 * @route '/dashboard/modelos/{printerModel}/edit'
 */
    const editForm = (args: { printerModel: number | { id: number } } | [printerModel: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\PrinterModelController::edit
 * @see app/Http/Controllers/Admin/PrinterModelController.php:42
 * @route '/dashboard/modelos/{printerModel}/edit'
 */
        editForm.get = (args: { printerModel: number | { id: number } } | [printerModel: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\PrinterModelController::edit
 * @see app/Http/Controllers/Admin/PrinterModelController.php:42
 * @route '/dashboard/modelos/{printerModel}/edit'
 */
        editForm.head = (args: { printerModel: number | { id: number } } | [printerModel: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\PrinterModelController::update
 * @see app/Http/Controllers/Admin/PrinterModelController.php:43
 * @route '/dashboard/modelos/{printerModel}'
 */
export const update = (args: { printerModel: number | { id: number } } | [printerModel: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/modelos/{printerModel}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\PrinterModelController::update
 * @see app/Http/Controllers/Admin/PrinterModelController.php:43
 * @route '/dashboard/modelos/{printerModel}'
 */
update.url = (args: { printerModel: number | { id: number } } | [printerModel: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { printerModel: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { printerModel: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    printerModel: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        printerModel: typeof args.printerModel === 'object'
                ? args.printerModel.id
                : args.printerModel,
                }

    return update.definition.url
            .replace('{printerModel}', parsedArgs.printerModel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PrinterModelController::update
 * @see app/Http/Controllers/Admin/PrinterModelController.php:43
 * @route '/dashboard/modelos/{printerModel}'
 */
update.put = (args: { printerModel: number | { id: number } } | [printerModel: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\PrinterModelController::update
 * @see app/Http/Controllers/Admin/PrinterModelController.php:43
 * @route '/dashboard/modelos/{printerModel}'
 */
update.patch = (args: { printerModel: number | { id: number } } | [printerModel: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\PrinterModelController::update
 * @see app/Http/Controllers/Admin/PrinterModelController.php:43
 * @route '/dashboard/modelos/{printerModel}'
 */
    const updateForm = (args: { printerModel: number | { id: number } } | [printerModel: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\PrinterModelController::update
 * @see app/Http/Controllers/Admin/PrinterModelController.php:43
 * @route '/dashboard/modelos/{printerModel}'
 */
        updateForm.put = (args: { printerModel: number | { id: number } } | [printerModel: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Admin\PrinterModelController::update
 * @see app/Http/Controllers/Admin/PrinterModelController.php:43
 * @route '/dashboard/modelos/{printerModel}'
 */
        updateForm.patch = (args: { printerModel: number | { id: number } } | [printerModel: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\PrinterModelController::destroy
 * @see app/Http/Controllers/Admin/PrinterModelController.php:44
 * @route '/dashboard/modelos/{printerModel}'
 */
export const destroy = (args: { printerModel: number | { id: number } } | [printerModel: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/modelos/{printerModel}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\PrinterModelController::destroy
 * @see app/Http/Controllers/Admin/PrinterModelController.php:44
 * @route '/dashboard/modelos/{printerModel}'
 */
destroy.url = (args: { printerModel: number | { id: number } } | [printerModel: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { printerModel: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { printerModel: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    printerModel: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        printerModel: typeof args.printerModel === 'object'
                ? args.printerModel.id
                : args.printerModel,
                }

    return destroy.definition.url
            .replace('{printerModel}', parsedArgs.printerModel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PrinterModelController::destroy
 * @see app/Http/Controllers/Admin/PrinterModelController.php:44
 * @route '/dashboard/modelos/{printerModel}'
 */
destroy.delete = (args: { printerModel: number | { id: number } } | [printerModel: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\PrinterModelController::destroy
 * @see app/Http/Controllers/Admin/PrinterModelController.php:44
 * @route '/dashboard/modelos/{printerModel}'
 */
    const destroyForm = (args: { printerModel: number | { id: number } } | [printerModel: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\PrinterModelController::destroy
 * @see app/Http/Controllers/Admin/PrinterModelController.php:44
 * @route '/dashboard/modelos/{printerModel}'
 */
        destroyForm.delete = (args: { printerModel: number | { id: number } } | [printerModel: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const modelos = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default modelos