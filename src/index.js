import Vue from 'vue'

export default Vue.directive('stash',
{
    inserted(el, binding, vnode)
    {
        var instance = vnode.componentInstance || (vnode.parent ? vnode.parent.componentInstance : null)

        if(!instance)
            console.warn('v-stash directive has to be placed on a component or a topmost child inside of the template!')

        var properties = binding.value.properties
        var identifier = 'stashable-' + (binding.value.identifier || document.location.pathname.replace('/', '-') + '-' + instance.$vnode.tag + '-id-' + instance._uid)
        var stashed = JSON.parse(localStorage.getItem(identifier))

        for (var i = 0; i < properties.length; i++)
        {
            var property = properties[i]

            if(stashed)
            {
                instance[property] = stashed[property]
            }

            instance.$watch(property, function(n, o)
            {
                if(n != o)
                {
                    var stash = {}

                    for (var i = 0; i < properties.length; i++)
                    {
                        stash[properties[i]] = instance[properties[i]]
                    }

                    localStorage.setItem(identifier, JSON.stringify(stash))
                }
            }, { deep: true})
        }
    }
})
