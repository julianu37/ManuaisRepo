import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\BrandController::index
 * @see app/Http/Controllers/Admin/BrandController.php:14
 * @route '/dashboard/marcas'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/marcas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BrandController::index
 * @see app/Http/Controllers/Admin/BrandController.php:14
 * @route '/dashboard/marcas'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BrandController::index
 * @see app/Http/Controllers/Admin/BrandController.php:14
 * @route '/dashboard/marcas'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\BrandController::index
 * @see app/Http/Controllers/Admin/BrandController.php:14
 * @route '/dashboard/marcas'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\BrandController::index
 * @see app/Http/Controllers/Admin/BrandController.php:14
 * @route '/dashboard/marcas'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\BrandController::index
 * @see app/Http/Controllers/Admin/BrandController.php:14
 * @route '/dashboard/marcas'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\BrandController::index
 * @see app/Http/Controllers/Admin/BrandController.php:14
 * @route '/dashboard/marcas'
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
* @see \App\Http\Controllers\Admin\BrandController::create
 * @see app/Http/Controllers/Admin/BrandController.php:22
 * @route '/dashboard/marcas/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/marcas/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BrandController::create
 * @see app/Http/Controllers/Admin/BrandController.php:22
 * @route '/dashboard/marcas/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BrandController::create
 * @see app/Http/Controllers/Admin/BrandController.php:22
 * @route '/dashboard/marcas/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\BrandController::create
 * @see app/Http/Controllers/Admin/BrandController.php:22
 * @route '/dashboard/marcas/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\BrandController::create
 * @see app/Http/Controllers/Admin/BrandController.php:22
 * @route '/dashboard/marcas/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\BrandController::create
 * @see app/Http/Controllers/Admin/BrandController.php:22
 * @route '/dashboard/marcas/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\BrandController::create
 * @see app/Http/Controllers/Admin/BrandController.php:22
 * @route '/dashboard/marcas/create'
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
* @see \App\Http\Controllers\Admin\BrandController::store
 * @see app/Http/Controllers/Admin/BrandController.php:27
 * @route '/dashboard/marcas'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/marcas',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\BrandController::store
 * @see app/Http/Controllers/Admin/BrandController.php:27
 * @route '/dashboard/marcas'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BrandController::store
 * @see app/Http/Controllers/Admin/BrandController.php:27
 * @route '/dashboard/marcas'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\BrandController::store
 * @see app/Http/Controllers/Admin/BrandController.php:27
 * @route '/dashboard/marcas'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\BrandController::store
 * @see app/Http/Controllers/Admin/BrandController.php:27
 * @route '/dashboard/marcas'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\BrandController::show
 * @see app/Http/Controllers/Admin/BrandController.php:42
 * @route '/dashboard/marcas/{brand}'
 */
export const show = (args: { brand: string | number | { id: string | number } } | [brand: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/marcas/{brand}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BrandController::show
 * @see app/Http/Controllers/Admin/BrandController.php:42
 * @route '/dashboard/marcas/{brand}'
 */
show.url = (args: { brand: string | number | { id: string | number } } | [brand: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { brand: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { brand: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    brand: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        brand: typeof args.brand === 'object'
                ? args.brand.id
                : args.brand,
                }

    return show.definition.url
            .replace('{brand}', parsedArgs.brand.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BrandController::show
 * @see app/Http/Controllers/Admin/BrandController.php:42
 * @route '/dashboard/marcas/{brand}'
 */
show.get = (args: { brand: string | number | { id: string | number } } | [brand: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\BrandController::show
 * @see app/Http/Controllers/Admin/BrandController.php:42
 * @route '/dashboard/marcas/{brand}'
 */
show.head = (args: { brand: string | number | { id: string | number } } | [brand: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\BrandController::show
 * @see app/Http/Controllers/Admin/BrandController.php:42
 * @route '/dashboard/marcas/{brand}'
 */
    const showForm = (args: { brand: string | number | { id: string | number } } | [brand: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\BrandController::show
 * @see app/Http/Controllers/Admin/BrandController.php:42
 * @route '/dashboard/marcas/{brand}'
 */
        showForm.get = (args: { brand: string | number | { id: string | number } } | [brand: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\BrandController::show
 * @see app/Http/Controllers/Admin/BrandController.php:42
 * @route '/dashboard/marcas/{brand}'
 */
        showForm.head = (args: { brand: string | number | { id: string | number } } | [brand: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\BrandController::edit
 * @see app/Http/Controllers/Admin/BrandController.php:50
 * @route '/dashboard/marcas/{brand}/edit'
 */
export const edit = (args: { brand: string | number | { id: string | number } } | [brand: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/marcas/{brand}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BrandController::edit
 * @see app/Http/Controllers/Admin/BrandController.php:50
 * @route '/dashboard/marcas/{brand}/edit'
 */
edit.url = (args: { brand: string | number | { id: string | number } } | [brand: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { brand: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { brand: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    brand: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        brand: typeof args.brand === 'object'
                ? args.brand.id
                : args.brand,
                }

    return edit.definition.url
            .replace('{brand}', parsedArgs.brand.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BrandController::edit
 * @see app/Http/Controllers/Admin/BrandController.php:50
 * @route '/dashboard/marcas/{brand}/edit'
 */
edit.get = (args: { brand: string | number | { id: string | number } } | [brand: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\BrandController::edit
 * @see app/Http/Controllers/Admin/BrandController.php:50
 * @route '/dashboard/marcas/{brand}/edit'
 */
edit.head = (args: { brand: string | number | { id: string | number } } | [brand: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\BrandController::edit
 * @see app/Http/Controllers/Admin/BrandController.php:50
 * @route '/dashboard/marcas/{brand}/edit'
 */
    const editForm = (args: { brand: string | number | { id: string | number } } | [brand: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\BrandController::edit
 * @see app/Http/Controllers/Admin/BrandController.php:50
 * @route '/dashboard/marcas/{brand}/edit'
 */
        editForm.get = (args: { brand: string | number | { id: string | number } } | [brand: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\BrandController::edit
 * @see app/Http/Controllers/Admin/BrandController.php:50
 * @route '/dashboard/marcas/{brand}/edit'
 */
        editForm.head = (args: { brand: string | number | { id: string | number } } | [brand: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\BrandController::update
 * @see app/Http/Controllers/Admin/BrandController.php:58
 * @route '/dashboard/marcas/{brand}'
 */
export const update = (args: { brand: string | number | { id: string | number } } | [brand: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/marcas/{brand}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\BrandController::update
 * @see app/Http/Controllers/Admin/BrandController.php:58
 * @route '/dashboard/marcas/{brand}'
 */
update.url = (args: { brand: string | number | { id: string | number } } | [brand: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { brand: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { brand: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    brand: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        brand: typeof args.brand === 'object'
                ? args.brand.id
                : args.brand,
                }

    return update.definition.url
            .replace('{brand}', parsedArgs.brand.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BrandController::update
 * @see app/Http/Controllers/Admin/BrandController.php:58
 * @route '/dashboard/marcas/{brand}'
 */
update.put = (args: { brand: string | number | { id: string | number } } | [brand: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\BrandController::update
 * @see app/Http/Controllers/Admin/BrandController.php:58
 * @route '/dashboard/marcas/{brand}'
 */
update.patch = (args: { brand: string | number | { id: string | number } } | [brand: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\BrandController::update
 * @see app/Http/Controllers/Admin/BrandController.php:58
 * @route '/dashboard/marcas/{brand}'
 */
    const updateForm = (args: { brand: string | number | { id: string | number } } | [brand: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\BrandController::update
 * @see app/Http/Controllers/Admin/BrandController.php:58
 * @route '/dashboard/marcas/{brand}'
 */
        updateForm.put = (args: { brand: string | number | { id: string | number } } | [brand: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Admin\BrandController::update
 * @see app/Http/Controllers/Admin/BrandController.php:58
 * @route '/dashboard/marcas/{brand}'
 */
        updateForm.patch = (args: { brand: string | number | { id: string | number } } | [brand: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\BrandController::destroy
 * @see app/Http/Controllers/Admin/BrandController.php:66
 * @route '/dashboard/marcas/{brand}'
 */
export const destroy = (args: { brand: string | number | { id: string | number } } | [brand: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/marcas/{brand}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\BrandController::destroy
 * @see app/Http/Controllers/Admin/BrandController.php:66
 * @route '/dashboard/marcas/{brand}'
 */
destroy.url = (args: { brand: string | number | { id: string | number } } | [brand: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { brand: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { brand: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    brand: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        brand: typeof args.brand === 'object'
                ? args.brand.id
                : args.brand,
                }

    return destroy.definition.url
            .replace('{brand}', parsedArgs.brand.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BrandController::destroy
 * @see app/Http/Controllers/Admin/BrandController.php:66
 * @route '/dashboard/marcas/{brand}'
 */
destroy.delete = (args: { brand: string | number | { id: string | number } } | [brand: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\BrandController::destroy
 * @see app/Http/Controllers/Admin/BrandController.php:66
 * @route '/dashboard/marcas/{brand}'
 */
    const destroyForm = (args: { brand: string | number | { id: string | number } } | [brand: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\BrandController::destroy
 * @see app/Http/Controllers/Admin/BrandController.php:66
 * @route '/dashboard/marcas/{brand}'
 */
        destroyForm.delete = (args: { brand: string | number | { id: string | number } } | [brand: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const BrandController = { index, create, store, show, edit, update, destroy }

export default BrandController